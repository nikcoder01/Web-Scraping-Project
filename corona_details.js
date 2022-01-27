const request = require('request')//Request is Asyncly executed in JAVASCRIPT
const cheerio = require('cheerio')

console.log('Before')

request('https://www.worldometers.info/coronavirus/',cb)

function cb(error,response,html){
if (error){
    console.error(error);
}
else{
handleHtml(html);
}
}


function handleHtml(html)
{
    let selTool = cheerio.load(html)    // load html site o selTool in encoded format
  //  console.log(selTool)
  let contentArr=selTool('.maincounter-number span')   //sets value returned by browser in an Array Format.

let totalcases = selTool(contentArr[0]).text()     // .text() coberts encoded to text format back again
console.log('Total Cases: ' + totalcases)

let totalDeaths = selTool(contentArr[1]).text()
console.log('Total Deaths: ' + totalDeaths)

let totalRecovered = selTool(contentArr[2]).text()
console.log('Total Recovered: ' + totalRecovered)
}





console.log('After')