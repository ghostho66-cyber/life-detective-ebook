export function shuffle(values){return [...values].sort(()=>Math.random()-.5)}
export function makeChoices(pool,target,count){return shuffle([target,...shuffle([...new Set(pool)].filter(x=>x!==target)).slice(0,count-1)])}
export function matchesMemory(targets,selected){return targets.length===selected.length&&new Set(selected).size===selected.length&&targets.every(x=>selected.includes(x))}
export function matchesSentence(target,selected){return target.length===selected.length&&target.every((x,i)=>selected[i]===x)}
export function createTraceInput(){
  const strokes=[];let pointer=null,active=null;
  return {strokes,
    begin(id,point){if(pointer!==null)return false;pointer=id;active=[point];strokes.push(active);return true},
    move(id,point){if(pointer!==id||!active)return false;const last=active.at(-1),n=Math.max(1,Math.ceil(Math.hypot(point[0]-last[0],point[1]-last[1])/4));for(let i=1;i<=n;i++)active.push([last[0]+(point[0]-last[0])*i/n,last[1]+(point[1]-last[1])*i/n]);return true},
    end(id){if(pointer!==id)return false;pointer=null;active=null;return true},
    clear(){strokes.length=0;pointer=null;active=null}
  };
}
export function traceScore(strokes,target,tolerance=26){
  const points=strokes.flat(); if(points.length<8||!target.length)return {passed:false,coverage:0,accuracy:0};
  const near=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1])<=tolerance;
  const coverage=target.filter(t=>points.some(p=>near(t,p))).length/target.length;
  const accuracy=points.filter(p=>target.some(t=>near(t,p))).length/points.length;
  return {passed:coverage>=.78&&accuracy>=.65,coverage,accuracy};
}
