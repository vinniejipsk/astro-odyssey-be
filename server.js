var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var cors = require("cors");

require("dotenv").config();
require("./client/mongo");

// var securityMiddleware = require ('./middleware/security')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postsRouter = require("./routes/posts");
var astrosRouter = require("./routes/astros");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
// app.use(securityMiddleware.checkJWT)

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/astros", astrosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // Log the error for debugging purposes
  console.error(err.stack);

  // Determine the status code: use the error's status or default to 500
  const statusCode = err.status || 500;

  // Prepare the error response
  const response = {
    error: {
      message: err.message,
      // Include stack trace in development only for debugging
      ...(req.app.get('env') === 'development' && { stack: err.stack }),
    }
  };

  // Send the error response as JSON
  res.status(statusCode).json(response);
});

module.exports = app;