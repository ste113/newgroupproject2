import express from "express";
import { alltables } from "../../src/db/schema";
import { db } from "../db/connect";
import { questionsets } from "../../src/db/schema";
import { eq } from "drizzle-orm";
var router = express.Router();

router.get("/quizzes/:id", async (req, res) => {
  let table = await db
    .select()
    .from(questionsets)
    .where(eq(questionsets.setname, req.params.id));
  let tablename = table[0].setname;

  let randomtable = alltables.filter(
    (n) => tablename == n[Object.getOwnPropertySymbols(n)[0]],
  )[0];

  let tablewithdata = await db.select().from(randomtable);

  res.render("questions", {
    layout: "quiz",
    action: `/quizzes/${req.params.id}/results`,
    results: tablewithdata,
  });
});

router.post("/quizzes/:id/results", async (req, res) => {
  let score = 0;
  let table = await db
    .select()
    .from(questionsets)
    .where(eq(questionsets.setname, req.params.id));
  let tablename = table[0].setname;
  let useranswers = req.body;

  let randomtable = alltables.filter(
    (n) => tablename == n[Object.getOwnPropertySymbols(n)[0]],
  )[0];

  let tablewithdata = await db.select().from(randomtable);
  let correctanswers = await db
    .select({ answer: randomtable.correct_answer })
    .from(randomtable);

  tablewithdata.map((e) => {
    try {
      if (
        e.correct_answer ===
        useranswers[tablewithdata.indexOf(e)].toString().replaceAll("_", " ")
      ) {
        score += 1;
      }
    } catch (err) {
      console.log(err);
    }
  });

  res.render("answers", {
    useranswers: req.body,
    correctanswers: correctanswers,
    tablewithdata: tablewithdata,
    score: score,
  });
});

export default router;
