let fs = require("fs");
const lineReader = require('line-reader');
const getLastIndex = require('./getIndex');
let data,Q1Line,Q2Line,Q3Line,Q4Line,Q5Line;
let Q1index,Q2index,Q3index,Q4index,Q5index,bqIndex;
let Q1lastindex,Q2lastindex,Q3lastindex,Q4lastindex,Q5lastindex;

let fullData;

data = fs.readFileSync('inputFile/Engineering_Assignment_Advance.txt',{encoding:'utf8', flag:'r'});
  
//getting current index of questions
Q1index = data.indexOf("Q1)");
Q2index = data.indexOf("Q2)");
Q3index = data.indexOf("Q3)");
Q4index = data.indexOf("Q4)");
Q5index = data.indexOf("Q5)");
bqIndex = data.indexOf("Bonus Question");

//getting last index where questions end
Q1lastindex = getLastIndex(Q1index,Q2index,Q3index,Q4index,Q5index,bqIndex);
Q2lastindex = getLastIndex(Q2index,Q1index,Q3index,Q4index,Q5index,bqIndex);
Q3lastindex = getLastIndex(Q3index,Q1index,Q2index,Q4index,Q5index,bqIndex);
Q4lastindex = getLastIndex(Q4index,Q1index,Q2index,Q3index,Q5index,bqIndex);
Q5lastindex = getLastIndex(Q5index,Q1index,Q2index,Q3index,Q4index,bqIndex);

//getting all questions
Q1Line = data.substring(Q1index,Q1lastindex);
Q2Line = data.substring(Q2index,Q2lastindex);
Q3Line = data.substring(Q3index,Q3lastindex);
Q4Line = data.substring(Q4index,Q4lastindex);
Q5Line = data.substring(Q5index,Q5lastindex);

let firstPartOfFile = data.substring(0, Q4index);
let lastPartOfFile = data.substring(bqIndex,data.length-1);

//all questions strings
let allQuestions = Q1Line+Q2Line+Q3Line+Q4Line+Q5Line;

fullData = firstPartOfFile+allQuestions+lastPartOfFile



//writing the updated data into file
fs.writeFile('outputFile/Engineering_Assignment_Advance.txt', fullData, err => {
    if (err) {
      console.error(err)
      return
    }
  })
  




