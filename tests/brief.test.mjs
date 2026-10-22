import test from 'node:test';
import assert from 'node:assert/strict';
import {createBrief,summarizeTrial} from '../src/brief.mjs';
const brief={problem:'Students miss timetable changes.',evidence:'Interviewed 5 students; no purchase evidence yet.',contribution:'I can prototype and test the interface.',partner:'Own interviews with college administrators.',time:'6 hours per week, IST.',trial:'Interview 3 administrators and review the findings.'};
test('A brief preserves actual evidence, responsibilities and working limits',()=>{
 const result=createBrief(brief);for(const value of Object.values(brief))assert.ok(result.includes(value));assert.match(result,/## Questions for our first conversation/);assert.doesNotMatch(result,/verified|AI matching|compatibility score/i);
});
test('Missing fields are rejected rather than filling fictional facts',()=>{
 for(const key of Object.keys(brief))assert.throws(()=>createBrief({...brief,[key]:'  '}),RangeError);
 assert.throws(()=>createBrief({...brief,evidence:'a'.repeat(1201)}),RangeError);
});
test('Unicode and multi-line answers survive without HTML interpretation',()=>{
 const output=createBrief({...brief,title:'हमारा अगला कदम',contribution:'Design\r\n<script>example</script>'});assert.match(output,/हमारा अगला कदम/);assert.match(output,/Design\n<script>example<\/script>/);assert.equal(output.includes('\r'),false);
});
test('Trial plan requires both responsibilities and an explicit boundary',()=>{
 const trial={goal:'One prototype',ownerA:'Design',ownerB:'Test',finish:'A review in seven days',stop:'No spending or ownership promises.'};
 const result=summarizeTrial(trial);for(const value of Object.values(trial))assert.ok(result.includes(value));assert.throws(()=>summarizeTrial({...trial,stop:''}),RangeError);assert.match(result,/not a contract/);
});
