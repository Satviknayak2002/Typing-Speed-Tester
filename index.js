const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const User = require("./js/userSchemaFile");

const app = express();

const port = 8800;

app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/landing.html");
});

app.get("/signin", (req, res) => {
  res.sendFile(__dirname + "/signin.html");
});

app.post("/signin", urlencodedParser, (req, res) => {
  // console.log(req.body.user, req.body.pass);
  User.find({ email: req.body.email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length == 0) {
        res.sendFile(__dirname + "/signup.html");
      } else if (result[0].password === req.body.pass) {
        User.findOneAndUpdate(
          { email: req.body.email },
          { loggedIn: true },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.sendFile(__dirname + "/index.html");
            }
          }
        );
      } else {
        res.sendFile(__dirname + "/signin.html");
      }
    }
  });
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", urlencodedParser, (req, res) => {
  // console.log(req.body.user, req.body.pass);
  if (req.body.pass === req.body.confpass) {
    let newUser = new User({
      email: req.body.email,
      password: req.body.pass,
      loggedIn: true,
    });
    newUser.save((err, result) => {
      if (err) {
        res.sendFile(__dirname + "/signin.html");
      } else {
        User.findOneAndUpdate(
          { email: req.body.email },
          { loggedIn: true },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.sendFile(__dirname + "/index.html");
            }
          }
        );
      }
    });
  } else {
    res.sendFile(__dirname + "/signup.html");
  }
});

app.post("/", urlencodedParser, (req, res) => {
  creds = { username: req.body.user, password: req.body.password };
  console.log(creds);
});

app.post("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/logout", (req, res) => {
  User.findOneAndUpdate(
    { loggedIn: true },
    { loggedIn: false },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.sendFile(__dirname + "/landing.html");
      }
    }
  );
});

mongoose.connect(
  "mongodb://localhost/typeRacer",
  () => {
    console.log("Connected.....");
  },
  (e) => console.log(e)
);

app.listen(port, () => {
  console.log(`Listening to post ${port}`);
});

