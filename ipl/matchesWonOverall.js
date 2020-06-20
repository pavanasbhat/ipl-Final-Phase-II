function matchesWonOverall(matches){
    const wins = {};
    for(let match of matches){
        const winner = match.winner;
        if(wins[winner]){
            wins[winner] += 1;
        }else{
            wins[winner] = 1;
        }
    }
    return wins;
}

module.exports = matchesWonOverall;



