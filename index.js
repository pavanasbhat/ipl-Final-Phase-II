const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonOverall = require("./ipl/matchesWonOverall");
const excessRuns = require("./ipl/excessRuns");
const mostEconomicBowlers = require("./ipl/mostEconomicBowlers");
const orangeCaps = require("./ipl/orangeCaps");
const allEconomy = require("./ipl/allEconomy");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH_ONE = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_TWO = "./public/winData.json";
const JSON_OUTPUT_FILE_THIRD = "./public/excessRuns.json";
const JSON_OUTPUT_FILE_FOURTH = "./public/economicBowler.json";
const JSON_OUTPUT_FILE_SIXTH = "./public/orangeCaps.json";
const JSON_OUTPUT_FILE_Seventh = "./public/allEconomy.json";






function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
    .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries =>{
       excessRuns(deliveries,matches); 
       saveExcessRuns(resultMatch);
       mostEconomicBowlers(deliveries,matches);
       saveEconomicBowlers(resultEconomy3);
       orangeCaps(deliveries,matches);
       saveOrangeCaps(finalResult);
       let finalResult1 = allEconomy(matches,deliveries);
       saveAllEconomy(finalResult1);
    });
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
      let wins = matchesWonOverall(matches);
      saveMatchesWonOverall(wins);
    });   
  }





function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_ONE, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveMatchesWonOverall(wins) {
  const jsonWinsData = {
    matchesWonOverall: wins
  };
  const jsonWinsString = JSON.stringify(jsonWinsData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_TWO, jsonWinsString, "utf8", err1 => {
    if (err1) {
      console.error(err1);
    }
  });
}

function saveExcessRuns(resultMatch){
  const jsonExcessData ={
    excessRuns: resultMatch
  };
  const jsonExcessString = JSON.stringify(jsonExcessData);
  fs.writeFile(JSON_OUTPUT_FILE_THIRD,jsonExcessString,"utf8",err2 =>{
    if(err2){
      console.log(err2);
    }
  });
}


function saveEconomicBowlers(resultEconomy3){
  const jsonEconomicData ={
    economicBowlers: resultEconomy3
  };
  const jsonEconomicString = JSON.stringify(jsonEconomicData);
  fs.writeFile(JSON_OUTPUT_FILE_FOURTH,jsonEconomicString,"utf8",err3 =>{
    if(err3){
      console.log(err3);
    }
  });
}


function saveOrangeCaps(finalResult){
  const jsonOrangeData ={
    topBatsmen: finalResult
  };
  const jsonOrangeString = JSON.stringify(jsonOrangeData);
  fs.writeFile(JSON_OUTPUT_FILE_SIXTH,jsonOrangeString,"utf8",err4 =>{
    if(err4){
      console.log(err4);
    }
  });
}

function saveAllEconomy(finalResult1){
  const jsonEcoData ={
    allEconomy: finalResult1
  };
  const jsonEcoString = JSON.stringify(jsonEcoData);
  fs.writeFile(JSON_OUTPUT_FILE_Seventh,jsonEcoString,"utf8",err5 =>{
    if(err5){
      console.log(err5);
    }
  });
}

main()