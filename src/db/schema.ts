import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const alltables: any[] = [];

export const comparingsize = sqliteTable("comparingsize", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  choice_1: text("choice_1").notNull(),
  choice_2: text("choice_2").notNull(),
  choice_3: text("choice_3"),
  choice_4: text("choice_4"),
  correct_answer: text("correct_answer").notNull(),
});

export const demographics = sqliteTable("demographics", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  choice_1: text("choice_1").notNull(),
  choice_2: text("choice_2").notNull(),
  choice_3: text("choice_3"),
  choice_4: text("choice_4"),
  correct_answer: text("correct_answer").notNull(),
});

export const geography1 = sqliteTable("geography1", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  choice_1: text("choice_1").notNull(),
  choice_2: text("choice_2").notNull(),
  choice_3: text("choice_3"),
  choice_4: text("choice_4"),
  correct_answer: text("correct_answer").notNull(),
});

export const history = sqliteTable("history", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  choice_1: text("choice_1").notNull(),
  choice_2: text("choice_2").notNull(),
  choice_3: text("choice_3"),
  choice_4: text("choice_4"),
  correct_answer: text("correct_answer").notNull(),
});

export const numbers = sqliteTable("numbers", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  choice_1: text("choice_1").notNull(),
  choice_2: text("choice_2").notNull(),
  choice_3: text("choice_3"),
  choice_4: text("choice_4"),
  correct_answer: text("correct_answer").notNull(),
});

export const planets = sqliteTable("planets", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  choice_1: text("choice_1").notNull(),
  choice_2: text("choice_2").notNull(),
  choice_3: text("choice_3"),
  choice_4: text("choice_4"),
  correct_answer: text("correct_answer").notNull(),
});

export const questionsets = sqliteTable("questionsets", {
  id: integer("id").primaryKey(),
  setname: text("setname").notNull(),
  numberofquestions: text("numberofquestions").notNull(),
  topic: text("topic").notNull(),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
});

export const sessions = sqliteTable("sessions", {
  sid: text("sid").primaryKey(),
  expires: text("expires"),
  data: text("data"),
});

alltables.push(
  comparingsize,
  demographics,
  geography1,
  history,
  numbers,
  planets,
  questionsets,
  users,
  sessions,
);
