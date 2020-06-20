function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

function fetchAndVisualizeWinnerData() {
  fetch("./winData.json")
    .then(p => p.json())
    .then(visualizeWinnerData);
}

fetchAndVisualizeWinnerData();    

function visualizeWinnerData(data) {
  visualizeMatchesWonOverall(data.matchesWonOverall);
  return;
}

function visualizeMatchesWonOverall(matchesWonOverall) {
  const winsData = [];
  for (let winner in matchesWonOverall) {
    winsData.push([winner, matchesWonOverall[winner]]);
  }

  Highcharts.chart("matches-won-overall", {
    chart: {
      type: "pie"
    },
    title: {
      text: "Matches Won By Each team Overall "
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Teams"
      }
    },
    series: [
      {
        name: "Wins",
        data: winsData 
      }
    ]
  });
}


function fetchAndVisualizeExcessData() {
  fetch("./excessRuns.json")
    .then(x => x.json())
    .then(visualizeExcessData);
}

fetchAndVisualizeExcessData();

function visualizeExcessData(data) {
  visualizeExcessRunsData(data.excessRuns);
  return;
}

function visualizeExcessRunsData(excessRuns) {
  const excessDataOne = [];
  for (let excess in excessRuns) {
    excessDataOne.push([excess, excessRuns[excess]]);
  }
  console.log(excessDataOne);

  Highcharts.chart("excess-runs-given", {
    
    chart: {
      type: "column"
    },
    title: {
      text: "Excess runs conceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Excess Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: excessDataOne 
      }
    ]
  });
}
   


let y = document.getElementById("seasons");
y.addEventListener('change', (e)=>{
var year = y.value;
  fetch(`/economy`)
    .then(data => data.json())
    .then(function(data){ 
      visualizeMostEconomicData(data,year)
    })
})

function visualizeMostEconomicData(data,year) {
  var tempData = [];
  const {allEconomy}=data;
  for(let x in allEconomy){
    if(x==year){
      tempData.push([allEconomy[x]])
    }
  }
  visualizeEconomicData(tempData);
  return;
}

function visualizeEconomicData(tempData) {
  const xyz = tempData[0][0];
  const mostEconomic = [];
  for (let ec in xyz) {
    mostEconomic.push([ec, parseFloat(xyz[ec])]);
  }
  console.log(mostEconomic);
  Highcharts.chart("most-economic-bowlers", {
    
    chart: {
      polar: true
    },
    title: {
      text: "Top Ten Economic Bowlers" 
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: mostEconomic
      }
    ]
  });
}



function fetchAndVisualizeOrangeData() {
  fetch("./orangeCaps.json")
    .then(e => e.json())
    .then(visualizeOrangeData);
}

fetchAndVisualizeOrangeData();

function visualizeOrangeData(data) {
  visualizeOrangeCapsData(data.topBatsmen);
  return;
}

function visualizeOrangeCapsData(topBatsmen) {
  const capsDataOne = [];
  for (let caps in topBatsmen) {
    capsDataOne.push([caps, topBatsmen[caps]]);

  }

  Highcharts.chart("top-ten-batsmens", {
    
    chart: {
      type: "column"
    },
    title: {
      text: "Top Ten batsmens of 2016 season"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Score"
      }
    },
    series: [
      {
        name: "Batsmen",
        data: capsDataOne
      }
    ]
  });
}



   
    
    
  
