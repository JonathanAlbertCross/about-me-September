let answerOne = prompt(
  "Would I prefer spending a quiet evening engrossed in a classic Russian novel rather than attending a noisy social event?"
);

massage = "";
if (answerOne == "yes") {
  message = "You know me so well - 1 point";
  image = "<img src=images/reading.jpeg>";
  let answerTwo = prompt(
    "Do I find solace in the works of existentialist philosophers like Jean-Paul Sartre and Albert Camus?"
  );
  messageTwo = "";
  if (answerOne == "yes") {
    messageTwo = "You know me so well - another point";
  } else if (answerOne == "no") {
    messageTwo = "Maybe I just like living my life - try again";
    image = "";
  } else {
    messageTwo = "I'm not sure that was an anwser - try again";
    image = "";
  }
} else if (answerOne == "no") {
  message = "Party boy I'm not - try again";
  image = "";
} else {
  message = "I'm not sure that was an anwser - try again";
  image = "";
}

document.write(message + image);
document.write(messageTwo + image);
console.log(message);
