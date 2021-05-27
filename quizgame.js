const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is 2+2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 4,
  },
  {
    question: "Where is the tallest building in the World?",
    choice1: "Dubai",
    choice2: "New York",
    choice3: "Shanghai",
    choice4: "None",
    answer: 1,
  },
  {
    question: "What is the capital of USA?",
    choice1: "Los Angeles",
    choice2: "New York",
    choice3: "Washington",
    choice4: "None",
    answer: 3,
  },
  {
    question: "What is the capital of Spain?",
    choice1: "Barcelona",
    choice2: "Madrid",
    choice3: "Bilbao",
    choice4: "None",
    answer: 2,
  },
];
