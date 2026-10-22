const text=(value,label,max=1200)=>{
 if(typeof value!=='string'||!value.trim())throw new RangeError(`Add ${label}.`);
 const result=value.replace(/\r\n?/g,'\n').trim();
 if(result.length>max)throw new RangeError(`Keep ${label} under ${max} characters.`);
 return result;
};
export function createBrief(input){
 const fields={
  problem:text(input.problem,'a specific problem'),
  evidence:text(input.evidence,'what you have tested'),
  contribution:text(input.contribution,'your contribution'),
  partner:text(input.partner,'the responsibility a co-founder would own'),
  time:text(input.time,'your available time',300),
  trial:text(input.trial,'a small working trial'),
 };
 const title=typeof input.title==='string'&&input.title.trim()?text(input.title,'a title',100):'Co-founder introduction';
 return `# ${title}\n\n## The problem\n${fields.problem}\n\n## What I have tested\n${fields.evidence}\n\n## What I bring\n${fields.contribution}\n\n## What a co-founder would own\n${fields.partner}\n\n## Time and working expectations\n${fields.time}\n\n## A small way to work together\n${fields.trial}\n\n## Questions for our first conversation\n- What would each person own during the trial?\n- What result would make us continue or stop?\n- When will we review the work together?\n\nPrepared with the Aspair founder toolkit. https://www.aspair.in/startup-tools\n`;
}
export function summarizeTrial({goal,ownerA,ownerB,finish,stop}){
 return `# Co-founder working trial\n\n## One bounded output\n${text(goal,'a trial output')}\n\n## Person A owns\n${text(ownerA,'Person A’s responsibility')}\n\n## Person B owns\n${text(ownerB,'Person B’s responsibility')}\n\n## Review date / duration\n${text(finish,'a review point',300)}\n\n## What is outside this trial\n${text(stop,'an explicit boundary')}\n\n## At the review\n- What did we deliver and learn?\n- Were responsibilities and feedback clear?\n- Do both people want another bounded trial?\n\nThis planning note is not a contract or a recommendation about equity.\n`;
}
