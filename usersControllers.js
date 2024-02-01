const express = require("express");

const userData = require("./data.json");

const controller = express.Router();

controller.get("/", (req, res) => {
  const { limit } = req.query;
  const { students } = userData;
  if (!limit || !Number(limit)) {
    res.send(students);
  }

  const studentsWithLimit = students.splice(0, limit);
  res.send(studentsWithLimit);
});

controller.get("/:id", (req, res) => {
  const { students } = userData;

  res.send(students.find((student) => req.params.id === student.id));
});

controller.get("/capitalStudentName/:id", (req, res) => {
  const { students } = userData;
  const foundStudent = students.find((student) => req.params.id === student.id);
  res.send(
    foundStudent.firstName.toUpperCase() + foundStudent.lastName.toUpperCase()
  );
});

module.exports = controller;
