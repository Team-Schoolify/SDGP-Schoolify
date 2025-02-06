import React from "react";
import SubjectCard from "./SubjectCard";
import "./Home.css";

function Home() {
  const subjects = ["Science", "Maths", "History", "English Language", "Western Music", "Tamil"];

  return (
    <div className="home">
      <h2>Hi, Name</h2>
      <div className="subject-grid">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} name={subject} />
        ))}
      </div>
      <div className="chat-icon">🤖</div>
    </div>
  );
}

export default Home;