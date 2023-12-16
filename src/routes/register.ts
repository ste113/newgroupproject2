import express from "express";
import bcrypt from "bcrypt";
import { db } from "../db/connect";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
var router = express.Router();

router.get("/register", (req, res) => {
  res.render("register", { layout: "main" });
});

router.post("/register", async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body?.password, 10);
  let user = await db
    .select()
    .from(users)
    .where(eq(users.username, req.body?.username));

  try {
    if (!user[0]) {
      await db
        .insert(users)
        .values({ username: req.body?.username, password: hashedPassword });
      res.redirect("/login");
    } else {
      res.render("register", {
        layout: "main",
        message: "Account already exists!",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
