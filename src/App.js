import React from "react";
import "./styles.css";
import { useState } from "react";

var hello = {
  HTML: [
    {
      Title:
        "HTML contains the building blocks of web programming. It usually dictates the arrangement of the content.'",
      Description: "",
      Link: ""
    }
  ],
  CSS: [
    {
      Title:
        "CSS is responsible for the design, colors, font size, and some animations too. It helps make the interaction more enjoyable and eye-catching.",
      Description: "",
      Link: "https://youtu.be/u6_a0d94A1Q"
    }
  ],
  JavaScript: [
    {
      Title:
        "JavaScript is responsible for the enhancement of the HTML. This is used whenever the webpage needs to be dynamic and have special effects. One of its abilities is it can run on all modern browsers. It’s lightweight and makes the execution process fast, enhancing the user experience to its best.      Once you’re able to have a grasp of those three front-end foundations, you can then proceed with learning the client-side libraries, which are React, Angular, and Vue.js.",
      Description: "",
      Link: "https://youtu.be/yLZazznWoAs"
    }
  ],
  Reactjs: [
    {
      Title:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
      Description: "",
      Link: "https://youtu.be/KUJsaM-hAjs"
    }
  ]
};

var topicList = Object.keys(hello);

export default function App() {
  const [topic, setTopic] = useState("HTML");
  function skillClickHandler(event) {
    setTopic(event);
  }

  return (
    <div className="App">
      <h1>Frontend Web Developer Roadmap</h1>
      <p style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
        A step-by-step guide has been released to become a modern frontend
        developer at Roadmap.sh. As Digitalact’s Frontend Community, we wanted
        to elaborate this roadmap and contribute to the guide. We will publish
        the main topics on the roadmap as a new blog post every two weeks. Keep
        reading, hang the last image in the head corner of your room .
      </p>
      <div>
        <ul>
          {topicList.map((topic) => {
            return (
              <li className="list-item-inline">
                <button
                  className="primary-button"
                  onClick={() => skillClickHandler(topic)}
                >
                  {topic}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <section className="section">
        <div className="container">
          <ul>
            {hello[topic].map((item) => {
              return (
                <li>
                  <div className="container-skill">
                    <h2>{item.Title}</h2>
                    <p>{item.Description}</p>
                    <a
                      className="secondary-button"
                      href={item.Link}
                      target="blank"
                    >
                      Know More
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer>
        <p></p>
      </footer>
    </div>
  );
}
