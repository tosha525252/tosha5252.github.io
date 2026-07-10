import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="pink">natosha caldwell</span>{" "}
            from <span className="pink">Dallas, Texas</span>.
            <br />
            I’m currently working as a{" "}
            <span className="pink">Software Developer</span> at{" "}
            <span className="pink">Lucid Day for Monday</span>.
            <br />I hold an Bachelor's Degree in{" "}
            <span className="pink">Information Systems</span> from{" "}
            <span className="pink">University of Texas at Arlington</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Natosha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
