import express from "express";
import passport from "passport";
import passportLocal from "passport-local";
import session from "express-session";
import path from "path";
import { db } from "../db/connect";
import "dotenv/config";
import { sessions, users } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
var router = express.Router();
const MemoryStore = require("memorystore")(session);
import flash from "connect-flash";

const LocalStrategy = passportLocal.Strategy;

router.use(flash());

router.use(
  session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: false,
    secret: "keyboard cat",
  }),
);

router.use(passport.authenticate("session"));

router.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }),
);

passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    let selected = await db
      .select()
      .from(users)
      .where(eq(users.username, username));

    if (selected.length > 0) {
      let row = selected[0];

      let compare = await bcrypt.compare(password, row.password);
      console.log(compare);

      if (compare) {
        return cb(null, row);
      } else {
        return cb(null, false, { message: "Incorrect username or password" });
      }
    } else {
      return cb(null, false, { message: "Incorrect username or password" });
    }
  }),
);

passport.serializeUser(function (user: any, cb) {
  process.nextTick(function () {
    if (user !== undefined) {
      cb(null, { id: user.id, username: user.username });
    }
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    if (user !== undefined) {
      return cb(null, user);
    }
  });
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get("/login", (req, res) => {
  const messages = req.flash("error");
  res.render("login", {
    layout: "main",
    message: messages,
  });
});

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),

  (req, res) => {
    req.flash("error", "Flash is back!");
  },
);

export default router;
