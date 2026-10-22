import {createBrief,summarizeTrial} from './brief.mjs';
const tools={brief:createBrief,trial:summarizeTrial};
for(const [name,build] of Object.entries(tools)){
 const form=document.getElementById(name+'-form');const output=document.getElementById(name+'-output');const status=document.getElementById(name+'-status');
 const refresh=()=>document.querySelectorAll(`[data-copy="${name}"],[data-download="${name}"]`).forEach(b=>b.disabled=!output.value.trim());
 form.addEventListener('submit',event=>{event.preventDefault();try{output.value=build(Object.fromEntries(new FormData(form)));status.textContent='Draft ready. Review and edit it before sharing.';refresh();}catch(error){status.textContent=error.message;}});
 output.addEventListener('input',refresh);
 document.querySelector(`[data-copy="${name}"]`).addEventListener('click',async()=>{try{await navigator.clipboard.writeText(output.value);status.textContent='Copied. Share only with people you choose.';}catch{output.focus();output.select();status.textContent='Select the draft and use your device’s Copy command.';}});
 document.querySelector(`[data-download="${name}"]`).addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([output.value],{type:'text/markdown;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=`aspair-${name}.md`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Markdown downloaded to your device.';});
}
const tabs=[...document.querySelectorAll('[role=tab]')];
function activate(tab){for(const t of tabs){const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;}}
for(const tab of tabs){tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const index=tabs.indexOf(tab);const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:tabs.length-1))%tabs.length;activate(tabs[next]);tabs[next].focus();});}
