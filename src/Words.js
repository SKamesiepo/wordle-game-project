
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
  await fetch(wordBank)
  .then((response) => response.text())
  .then((result) => {
    const wordArr = result.split("\r\n"); //There was an issue here
    wordSet = new Set(wordArr);
  });

  return { wordSet };
}

// set datastructure used cause set will tell you immediately
//Instead of array
//Will use fetch api
//The split("\n") basically means that the thing will be split up
//based on the fact that they are separated on each line