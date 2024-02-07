"use client";
//import fs from "fs";
//import React, { useState } from "react";
import { useRouter } from "next/navigation";

const data = {
  questions: [
    {
      id: "1",
      topic: "Health",
      Level: "1",
      question: "What nutrient is crucial for healthy skin?",
      answer_1: "Calcium",
      answer_2: "Vitamin C",
      answer_3: "Iron",
      correct_answer: "2",
    },
    {
      id: "2",
      topic: "Health",
      Level: "1",
      question: "Which activity is effective in reducing stress?",
      answer_1: "Watching TV",
      answer_2: "Eating chocolate",
      answer_3: "Yoga",
      correct_answer: "3",
    },
    {
      id: "3",
      topic: "Health",
      Level: "1",
      question: "What's a key benefit of staying hydrated?",
      answer_1: "Clearer skin",
      answer_2: "Brighter hair color",
      answer_3: "Stronger nails",
      correct_answer: "1",
    },
    {
      id: "4",
      topic: "Health",
      Level: "2",
      question: "What food is a good source of calcium for bone health?",
      answer_1: "Soda",
      answer_2: "Broccoli",
      answer_3: "French fries",
      correct_answer: "2",
    },
    {
      id: "5",
      topic: "Health",
      Level: "2",
      question: "How many hours of sleep are recommended for teens?",
      answer_1: "4-6 hours",
      answer_2: "12-14 hours",
      answer_3: "8-10 hours",
      correct_answer: "3",
    },
    {
      id: "6",
      topic: "Health",
      Level: "2",
      question: "Which snack is a healthy alternative to chips?",
      answer_1: "Almonds",
      answer_2: "Candy",
      answer_3: "Potato chips",
      correct_answer: "1",
    },
    {
      id: "7",
      topic: "Health",
      Level: "3",
      question: "What's the main purpose of sunscreen?",
      answer_1: "Moisturizing the skin",
      answer_2: "Enhancing tanning",
      answer_3: "Protecting from UV rays",
      correct_answer: "3",
    },
    {
      id: "8",
      topic: "Health",
      Level: "3",
      question: "Why is it important to include vegetables in your diet?",
      answer_1: "They taste good",
      answer_2: "Rich in vitamins and minerals",
      answer_3: "They make you taller",
      correct_answer: "2",
    },
    {
      id: "9",
      topic: "Health",
      Level: "3",
      question: "How can you maintain a balanced diet?",
      answer_1: "Only eat one type of food",
      answer_2: "Skip meals for faster results",
      answer_3: "Eat a variety of foods in moderation",
      correct_answer: "3",
    },
    {
      id: "10",
      topic: "Safe Social Media",
      Level: "1",
      question: "What information should you avoid sharing online?",
      answer_1: "Personal address",
      answer_2: "Favorite color",
      answer_3: "Pet's name",
      correct_answer: "1",
    },
    {
      id: "11",
      topic: "Safe Social Media",
      Level: "1",
      question: "What does a strong password typically include?",
      answer_1: "Your name and birthdate",
      answer_2: "Simple words like - password123",
      answer_3: "Combination of letters, numbers, and symbols",
      correct_answer: "3",
    },
    {
      id: "12",
      topic: "Safe Social Media",
      Level: "1",
      question:
        "Why is it important to check privacy settings on social media?",
      answer_1: "Increase follower count",
      answer_2: "Control who sees your posts",
      answer_3: "Get more likes",
      correct_answer: "2",
    },
    {
      id: "13",
      topic: "Safe Social Media",
      Level: "2",
      question: "What's a common sign of a phishing attempt on social media?",
      answer_1: "Regular updates from friends",
      answer_2: "Random friend requests",
      answer_3: "Unusual messages asking for personal information",
      correct_answer: "3",
    },
    {
      id: "14",
      topic: "Safe Social Media",
      Level: "2",
      question: "How can you deal with cyberbullying on social media?",
      answer_1: "Block and report the bully",
      answer_2: "Respond with negativity",
      answer_3: "Share personal information in retaliation",
      correct_answer: "1",
    },
    {
      id: "15",
      topic: "Safe Social Media",
      Level: "2",
      question: "Why should you think before posting pictures online?",
      answer_1: "To show off your lifestyle",
      answer_2: "Increase your popularity",
      answer_3: "Respect for privacy and consent",
      correct_answer: "3",
    },
    {
      id: "16",
      topic: "Safe Social Media",
      Level: "3",
      question: "What is two-factor authentication, and why is it important?",
      answer_1: "Extra layer of security, requires another verification step",
      answer_2: "A way to increase your follower count",
      answer_3: "Only needed for celebrities",
      correct_answer: "1",
    },
    {
      id: "17",
      topic: "Safe Social Media",
      Level: "3",
      question: "How often should you review and update your online passwords?",
      answer_1: "Once a year is sufficient",
      answer_2: "Regularly, at least every few months",
      answer_3: "Never, if it's not broken",
      correct_answer: "2",
    },
    {
      id: "18",
      topic: "Safe Social Media",
      Level: "3",
      question:
        "Why should you be cautious about accepting friend requests from strangers?",
      answer_1: "Protect yourself from potential scams or danger",
      answer_2: "Make new friends easily",
      answer_3: "Increase your follower count for popularity",
      correct_answer: "1",
    },
  ],
};

const user_data = {
  user: [
    {
      user_name: "topazshalom9",
      name: "Topaz Shalom",
      age: "24",
      chosen_topic: "Health",
      current_level: "1",
      current_question: "2",
      currnet_coins: "50",
    },
  ],
};

let fs;
if (typeof window === "undefined") {
  // Running on the server-side
  fs = require("fs");
}

function getQuestions() {
  return data.questions;
  //await fetch("http://localhost:5000/questions");
  /*
  const res = await fetch("http://localhost:5000/questions", {
    next: {
      revalidate: 0,
    },
  });
*/

  //return res.json();
}

function getUsers() {
  return user_data.user;
  //   await fetch("http://localhost:4000/user", {
  //   next: {
  //     revalidate: 0,
  //   },
  // });
}

/*
const readDataFromFile = (filePath) => {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};
const writeDataToFile = (data, filePath) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData);
};
*/

export default function Question() {
  // const [value, setNewValue] = useState("");
  //const [status, setNewStatus] = useState("");

  const questions = getQuestions();
  const users = getUsers();
  const router = useRouter();

  const handleClick = (question, answer) => {
    let correct = question.correct_answer;
    //const jsonData = readDataFromFile();
    //let newQuestionNumber = parseInt(jsonData.user[0].current_question);
    let newQuestionNumber=parseInt(user_data.user[0].current_question);
    if (correct == answer) {
      //write to jason to add points , level, question
      /*
      jsonData.user[0].currnet_coins = (
        parseInt(jsonData.user[0].currnet_coins) + 100
      ).toString();
      if (newQuestionNumber == 10) {
        //finished topic
        jsonData.user[0].chosen_topic = "safe_social_media";
        jsonData.user[0].current_level = "1";
      } else if (newQuestionNumber == 19) {
        //finished topic
        jsonData.user[0].chosen_topic = "health";
        jsonData.user[0].current_level = "1";
        newQuestionNumber = 1;
      } else if (newQuestionNumber % 3 == 1) {
        //same topic, next level
        jsonData.user[0].current_level = (
          parseInt(jsonData.user[0].current_level) + 1
        ).toString();
      }
      jsonData.user[0].current_question = newQuestionNumber.toString();
      */
      router.push("/game/congratsWin")
        //, {questionNum: newQuestionNumber+1,});
    } else {
      router.push("/game/congratsLoss")
                  //, {        questionNum: newQuestionNumber,});
    }
  };

  return (
    <>
      {questions.map((question) => (
        <div className="question-card" key={question.id}>
          {users.map((user) => user.current_question).includes(question.id) && (
            <div>
              <h2 className="question">{question.question}</h2>
              <button
                className="Answer"
                onClick={() => handleClick(question, "1")}
              >
                A. {question.answer_1}
              </button>
              <button
                className="Answer"
                onClick={() => handleClick(question, "2")}
              >
                B. {question.answer_2}
              </button>
              <button
                className="Answer"
                onClick={() => handleClick(question, "3")}
              >
                C. {question.answer_3}
              </button>
              {/*}
              <button onClick={() => handleState("result")}>
                Continue to result
              </button>
              */}
            </div>
          )}
        </div>
      ))}
      {questions.length === 0 && <p>There are no questions</p>}
    </>
  );
}

/*
{question.id === users.map((user) => user.current_question) && (

*/
