
import wordBank from './wordle-bank.txt'

export const boardDefault = [
  ["", "", "", "", ""], 
  ["", "", "", "", ""], 
  ["", "", "", "", ""], 
  ["", "", "", "", ""], 
  ["", "", "", "", ""], 
  ["", "", "", "", ""], 
]

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
  .then((response) => response.text())
  .then((result) => {
    const wordArr = result.split("\r\n"); //There was an issue here
    todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    wordSet = new Set(wordArr);
  });

  return { wordSet, todaysWord };
}

// set datastructure used cause set will tell you immediately
//Instead of array
//Will use fetch api
//The split("\n") basically means that the thing will be split up
//based on the fact that they are separated on each line