let answerOne = prompt(
  "Would I prefer spending a quiet evening engrossed in a classic Russian novel rather than attending a noisy social event?"
);

massage = "";
if (answerOne == "yes") {
  message = "You know me so well - 1 point";
  image = "<img src=images/reading.jpeg>";
} else if (answerOne == "no") {
  message = "Party boy I'm not - try again";
  image = "";
} else {
  message = "I'm not sure that was an anwser - try again";
  image = "";
}

let answerTwo = prompt(
  "Do I find solace in the works of existentialist philosophers like Jean-Paul Sartre and Albert Camus?"
);

messageTwo = "";
if (answerTwo == "yes") {
  messageTwo =
    "Yes, Man can will nothing unless he has first understood that he must count on no one but himself - another point";
} else if (answerOne == "no") {
  messageTwo = "Maybe I just like living my life - try again";
  image = "";
} else {
  messageTwo = "I'm not sure that was an answer - try again";
  image = "";
}

let answerThree = prompt(
  "Would I choose a night at the opera or symphony over a night at a trendy nightclub?"
);

messageThree = "";
if (answerThree == "yes") {
  messageThree = "Ok Ok! I'm boring! I know!";
} else if (answerThree == "no") {
  messageThree = "They wouldn't let me in! - try again";
  image = "";
} else {
  messageThree = "I'm not sure that was an answer - try again";
  image = "";
}

let answerFour = prompt(
  "Would I opt for a documentary on a historical figure over a blockbuster movie?"
);

messageFour = "";
if (answerFour == "yes") {
  messageFour = "Yes, give me a good period drama any day!";
} else if (answerFour == "no") {
  messageFour =
    "Errm like Superman? Not quite my thing (good graphics tho) - try again";
  image = "";
} else {
  messageFour = "I'm not sure that was an answer - try again";
  image = "";
}

let answerFive = prompt(
  "Do I enjoy deciphering complex mathematical puzzles and exploring abstract mathematical concepts?"
);

messageFive = "";
if (answerFour == "yes") {
  messageFive = "Kinda, depends if I can solve them lol";
} else if (answerFour == "no") {
  messageFive = "Ha! Depends I guess!";
  image = "";
} else {
  messageFive = "I'm not sure that was an answer - try again";
  image = "";
}

document.write(message + image);
document.write(messageTwo);
document.write(messageThree);
document.write(messageFour);
document.write(messageFive);
console.log(message);
