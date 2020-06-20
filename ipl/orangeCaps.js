function orangeCaps(deliveries,matches){
 
    
    let exe = [];
    finalResult = {};
    initialResults = {};
    secondaryResults = {};
    for(let match of matches){
        const id = match.id;
        const season = match.season;
            if(season == 2016){
                exe.push(id);
            }
        }
    
    
    for (let j of exe) {
        for (let delivery of deliveries) {
          if (delivery.match_id === j) {
            let batsman = delivery.batsman;
            let batsman_runs = delivery.batsman_runs;
            if (initialResults[batsman]) {
                initialResults[batsman] += parseInt(batsman_runs);
            } else {
                initialResults[batsman] = parseInt(batsman_runs);
            }
          }
        }
      }
keys = Object.keys(initialResults);
values = Object.values(initialResults);
keys.sort(function (a, b) {
    return initialResults[b] - initialResults[a];
});
    
values.sort(function (a, b) {
    return b - a;
});

keys.forEach((key, i) => secondaryResults[key] = values[i]);
k =Object.keys(secondaryResults);
v = Object.values(secondaryResults);
var sliced1 = [];
var sliced2 = [];
for (var i=0; i<10; i++){
    sliced1[i] = k[i];}
for (var i=0; i<10; i++){
    sliced2[i] = v[i];}

sliced1.forEach((key, i) => finalResult[key] = sliced2[i]);



return finalResult;

}  
 




module.exports = orangeCaps;