function excessRuns(deliveries, matches){
    const exe = []; 
    resultMatch = {};
    for(let match of matches){
      const id = match.id;
      const season = match.season;
      const date = match.date;
      
      // const dateAr = date.split("");
      
        if(season == 2016){
          exe.push(id);
        }
      
      
    }
    for (let i of exe) {
        for (let delivery of deliveries) {
          if (delivery.match_id === i) {
            team = delivery.bowling_team;
            if (resultMatch[team]) {
              resultMatch[team] += parseInt(delivery.extra_runs);
            } else {
              resultMatch[team] = parseInt(delivery.extra_runs);
            }
          }
        }
      }
    return resultMatch;
    }

    

module.exports = excessRuns;