function allEconomy(matches, deliveries){
    let finalResult1 = {};
    for(let x=2008;x<=2019;x++){
        finalResult1[x] = Economy(deliveries, matches, x)
    }
    return finalResult1;
  }
     
  
  function Economy(deliveries,matches, year){
    const exe = []; 
    resultBowler = {};
    resultEconomy = {};
    resultEconomy1 = {};
    resultEconomy2 = {};
    allEco = {};
   
    for(let match of matches){
      const id = match.id;
      const season = match.season;
      if(season==year){
        exe.push(id);
      }
    }
    
    for (let i of exe) {
        for (let delivery of deliveries) {
          if (delivery.match_id === i) {
            var bowler = delivery.bowler;
            if (resultBowler[bowler]) {
                
                resultBowler[bowler] += parseInt(delivery.total_runs);
            } else {
              
                resultBowler[bowler] = parseInt(delivery.total_runs);
            }
          }
        }
    
      }
      for (let i of exe) {
        for(let delivery of deliveries){
          
          if (delivery.match_id === i) {
              var bowler = delivery.bowler;
              if(resultEconomy[bowler]){
                  resultEconomy[bowler] +=1
              }else{
                  resultEconomy[bowler] = 1;
              }
  
          }
        }
      }
  
  
    
  
    var x= Object.values(resultEconomy);
    var keys = Object.keys(resultBowler);
    for (var i = 0; i < keys.length; i++) {
        resultEconomy1[keys[i]] = ((resultBowler[keys[i]] / x[i])*6).toFixed(2);
    }
  
  
    keys = Object.keys(resultEconomy1);
    values = Object.values(resultEconomy1);
    keys.sort(function (a, b) {
        return resultEconomy1[a] - resultEconomy1[b];
    });
        
    values.sort(function (a, b) {
        return a - b;
    });
        
        
    
    keys.forEach((key, i) => resultEconomy2[key] = values[i]);
    k =Object.keys(resultEconomy2);
    v = Object.values(resultEconomy2);
    var sliced1 = [];
    var sliced2 = [];
    for (var i=0; i<10; i++){
        sliced1[i] = k[i];}
    for (var i=0; i<10; i++){
        sliced2[i] = v[i];}
    
        sliced1.forEach((key, i) => allEco[key] = sliced2[i]);
    
        return allEco;
  
  }

  module.exports = allEconomy;
