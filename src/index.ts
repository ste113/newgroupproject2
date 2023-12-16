import express from "express";
let app = express();

import { engine } from "express-handlebars";
import { db } from "./db/connect";
import { questionsets } from "./db/schema";

import authRouter from "./routes/auth";
import registerRouter from "./routes/register";
import QandARouter from "./routes/QandA";

import "dotenv/config";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "views");

var hbs = require("handlebars");

hbs.registerHelper(
  "notequal",
  function (choice: any, args2: any, options: any) {
    return choice == args2 ? options.inverse(this) : options.fn(this);
  },
);

hbs.registerHelper("add", function (index: any) {
  return index + 1;
});

hbs.registerHelper("replace", function (choice: any) {
  return choice.toString().replaceAll(" ", "_");
});

hbs.registerHelper(
  "button",
  function (table: any, useranswers: any, tableindex: any, choiceindex: any) {
    let choice = table[tableindex][`choice_${choiceindex + 1}`];
    let replace = useranswers[tableindex].replaceAll("_", " ");

    if (table[tableindex].correct_answer == choice && choice == replace) {
      return "bg-gray-400";
    } else if (
      choice == replace &&
      table[tableindex].correct_answer != choice
    ) {
      return "bg-red-400";
    } else if (table[tableindex].correct_answer == choice) {
      return "bg-green-400";
    }
  },
);

hbs.registerHelper(
  "checked",
  function (table: any, useranswers: any, tableindex: any, choiceindex: any) {
    let choice = table[tableindex][`choice_${choiceindex + 1}`];
    let replace = useranswers[tableindex].replaceAll("_", " ");
    if (choice == replace) {
      return "checked";
    }

    if (table[tableindex].correct_answer == choice) {
      return "checked";
    }
  },
);

hbs.registerHelper(
  "equal",
  function (table: any, useranswers: any, options: any) {
    return table == useranswers ? options.fn(this) : options.inverse(this);
  },
);

app.use("/", authRouter);
app.use("/", registerRouter);
app.use("/", QandARouter);

app.get("/", async (req, res) => {
  let array = await db.select().from(questionsets);
  let user: any = req.user;

  if (user) {
    let quizid = array[Math.floor(Math.random() * array.length)].setname;
    res.render("loggedin", {
      layout: "main",
      name: user.username,
      quizid: quizid,
    });
  } else {
    res.render("loggedout", { layout: "main" });
  }
});

app.listen(8080, () => {
  console.log("app listening to port 8080");
});
