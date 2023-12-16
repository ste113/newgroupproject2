import { db } from "./connect";
import {
  comparingsize,
  demographics,
  geography1,
  history,
  numbers,
  planets,
  questionsets,
} from "./schema";

const questionsetsData = [
  { id: 1, setname: "history", numberofquestions: "5", topic: "history" },
  { id: 2, setname: "numbers", numberofquestions: "5", topic: "numbers" },
  { id: 3, setname: "planets", numberofquestions: "5", topic: "planets" },
  {
    id: 4,
    setname: "demographics",
    numberofquestions: "5",
    topic: "demographics",
  },
  { id: 5, setname: "geography1", numberofquestions: "5", topic: "geography" },
  {
    id: 6,
    setname: "comparingsize",
    numberofquestions: "5",
    topic: "comparing",
  },
];

const planetsData = [
  {
    id: 1,
    question: "What is the smallest planet in the solar system?",
    choice_1: "Earth",
    choice_2: "Mars",
    choice_3: "Mercury",
    choice_4: "Venus",
    correct_answer: "Mercury",
  },
  {
    id: 2,
    question: "What is the largest planet in the solar system?",
    choice_1: "Earth",
    choice_2: "Jupiter",
    choice_3: "Neptune",
    choice_4: "Saturn",
    correct_answer: "Jupiter",
  },
  {
    id: 3,
    question: "Which planet is closest to the sun?",
    choice_1: "Jupiter",
    choice_2: "Mercury",
    choice_3: "Venus",
    choice_4: "Different planets at different times",
    correct_answer: "Mercury",
  },
  {
    id: 4,
    question: "Which planet is furthest from the sun?",
    choice_1: "Neptune",
    choice_2: "Saturn",
    choice_3: "Uranus",
    choice_4: "Different planets at different times",
    correct_answer: "Neptune",
  },
  {
    id: 5,
    question: "Which planet is closest to Earth?",
    choice_1: "Mars",
    choice_2: "Saturn",
    choice_3: "Venus",
    choice_4: "Different planets at different times",
    correct_answer: "Different planets at different times",
  },
];

const numbersData = [
  {
    id: 1,
    question: "Number of countries in the world, according to JetPunk",
    choice_1: "47",
    choice_2: "94",
    choice_3: "196",
    choice_4: null,
    correct_answer: "196",
  },
  {
    id: 2,
    question: "Players per team on the field in international football",
    choice_1: "7",
    choice_2: "9",
    choice_3: "11",
    choice_4: "13",
    correct_answer: "11",
  },
  {
    id: 3,
    question:
      "Age at which Jimi Hendrix, Janis Joplin, Jim Morrison, and Amy Winehouse died ",
    choice_1: "17",
    choice_2: "27",
    choice_3: "37",
    choice_4: null,
    correct_answer: "27",
  },
  {
    id: 4,
    question: "Unlucky number in China",
    choice_1: "4",
    choice_2: "8",
    choice_3: "13",
    choice_4: null,
    correct_answer: "4",
  },
  {
    id: 5,
    question: "Stars in the Milky Way",
    choice_1: "1000 - 4000",
    choice_2: "1 million - 4 million",
    choice_3: "100 billion - 400 billion",
    choice_4: null,
    correct_answer: "100 billion - 400 billion",
  },
];

const historyData = [
  {
    id: 1,
    question:
      "What group of people formed the priestly class in ancient Celtic society?",
    choice_1: "Druids",
    choice_2: "Gurkhas",
    choice_3: "Haruspices",
    choice_4: "Jesults",
    correct_answer: "Druids",
  },
  {
    id: 2,
    question:
      "What type of flower is a symbol of remembrance for World War One?",
    choice_1: "Orchid",
    choice_2: "Poppy",
    choice_3: "Rose",
    choice_4: "Tulip",
    correct_answer: "Poppy",
  },
  {
    id: 3,
    question:
      "Which monarch holds the record for the longest reign in British history?",
    choice_1: "Elizabeth II",
    choice_2: "Henry VIII",
    choice_3: "Victoria",
    choice_4: null,
    correct_answer: "Elizabeth II",
  },
  {
    id: 4,
    question: "What physical description is often associated with Richard III?",
    choice_1: "Blackbearded",
    choice_2: "Gigantic",
    choice_3: "Hunchbacked",
    choice_4: "Toothless",
    correct_answer: "Hunchbacked",
  },
  {
    id: 5,
    question:
      "What holiday did Parliamentary Puritans ban in 1647, replacing it with a day of fasting?",
    choice_1: "Christmas",
    choice_2: "Halloween",
    choice_3: "New Year's Day",
    choice_4: "Valentine's Day",
    correct_answer: "Christmas",
  },
];
const geography1Data = [
  {
    id: 1,
    question: "Which of these U.S. states does NOT border Canada?",
    choice_1: "Alaska",
    choice_2: "Indiana",
    choice_3: "Maine",
    choice_4: "Minnesota",
    correct_answer: "Indiana",
  },
  {
    id: 2,
    question: "Which of these countries was NOT a part of the Soviet Union?",
    choice_1: "Belarus",
    choice_2: "Georgia",
    choice_3: "Poland",
    choice_4: "Ukraine",
    correct_answer: "Poland",
  },
  {
    id: 3,
    question: "Which of these cities is NOT a national capital?",
    choice_1: "Bangkok",
    choice_2: "Cairo",
    choice_3: "Prague",
    choice_4: "Sydney",
    correct_answer: "Sydney",
  },
  {
    id: 4,
    question: "Which of these cities DOESN'T border the Mediterranean Sea?",
    choice_1: "Alexandria",
    choice_2: "Barcelona",
    choice_3: "Lisbon",
    choice_4: "Monaco",
    correct_answer: "Lisbon",
  },
  {
    id: 5,
    question: "Which of these countries was NEVER part of the British Empire?",
    choice_1: "Ireland",
    choice_2: "Kenya",
    choice_3: "New Zealand",
    choice_4: "Thailand",
    correct_answer: "Thailand",
  },
];

const demographicsData = [
  {
    id: 1,
    question: "Which of these places has the greatest population?",
    choice_1: "New Zealand",
    choice_2: "Belgium",
    choice_3: "Hong Kong",
    choice_4: "Texas",
    correct_answer: "Texas",
  },
  {
    id: 2,
    question:
      "What percent of the population of Turkey is registered as Muslim by the Turkish government?",
    choice_1: "50%",
    choice_2: "80%",
    choice_3: "99.8%",
    choice_4: null,
    correct_answer: "99.8%",
  },
  {
    id: 3,
    question: "Which of these countries has the highest population density?",
    choice_1: "Netherlands",
    choice_2: "Papua New Guinea",
    choice_3: "Peru",
    choice_4: null,
    correct_answer: "Netherlands",
  },
  {
    id: 4,
    question:
      "As of March 2021, what is the approximate population of the world?",
    choice_1: "4.93 billion",
    choice_2: "7.85 billion",
    choice_3: "9.12 billion",
    choice_4: null,
    correct_answer: "7.85 billion",
  },
  {
    id: 5,
    question:
      "Approximately what year is Nigeria projected to pass the United States in population?",
    choice_1: "It already has",
    choice_2: "2055",
    choice_3: "2300",
    choice_4: "Never",
    correct_answer: "Never",
  },
];

const comparingSizesData = [
  {
    id: 1,
    question: "Which of these countries has the largest population?",
    choice_1: "Brazil",
    choice_2: "Russia",
    choice_3: "Germany",
    choice_4: "Iran",
    correct_answer: "Brazil",
  },
  {
    id: 2,
    question:
      "Which of these mountain ranges has the highest maximum elevation?",
    choice_1: "Andes",
    choice_2: "Alps",
    choice_3: "Rockies",
    choice_4: "Urals",
    correct_answer: "Andes",
  },
  {
    id: 3,
    question: "Which of these rivers flows past the most countries?",
    choice_1: "Amazon",
    choice_2: "Euphrates",
    choice_3: "Mississippi",
    choice_4: "Danube",
    correct_answer: "Danube",
  },
  {
    id: 4,
    question: "Which of these cities has the highest population?",
    choice_1: "San Francisco",
    choice_2: "Santiago",
    choice_3: "Singapore",
    choice_4: "Shanghai",
    correct_answer: "Shanghai",
  },
  {
    id: 5,
    question: "Which of these islands has the largest area?",
    choice_1: "Iceland",
    choice_2: "Cuba",
    choice_3: "Great Britain",
    choice_4: "Madagascar",
    correct_answer: "Madagascar",
  },
];

const main = async () => {
  console.log("Seed start");
  try {
    await db.transaction(async (trx) => {
      await Promise.all([trx.insert(comparingsize).values(comparingSizesData)]);
      await Promise.all([trx.insert(demographics).values(demographicsData)]);
      await Promise.all([trx.insert(geography1).values(geography1Data)]);
      await Promise.all([trx.insert(history).values(historyData)]);
      await Promise.all([trx.insert(numbers).values(numbersData)]);
      await Promise.all([trx.insert(planets).values(planetsData)]);
      await Promise.all([trx.insert(questionsets).values(questionsetsData)]);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log("Seed done");
  process.exit(0);
};

main();
