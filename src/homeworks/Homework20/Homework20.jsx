import React from "react";
import { v4 } from 'uuid';
import "./styles.css";

const firstName = "John",
  lastName = "Doe",
  job = "Software Engineer",
  isManager = false,
  experience = 5,
  email = "john.doe@google.com",
  programLangs = ["JavaScript", "Python", "Machine Learning"];

function Homework20() {
  return (
    <div className="container">
      <div className="card">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          <strong>Job:</strong> {job}
        </p>
        <p>
          <strong>Status:</strong> {isManager ? "Manager" : "Employee"}
        </p>
        <p>
          <strong>Experience:</strong> {experience} years
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Program Languages:</strong>
        </p>
        <ul>
          {programLangs.map((lang) => (
            <li key={v4()}>{lang}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homework20;
