import React from 'react';

function Resume() {
  return (
    <section className="margin-5-resume">
      <div className="margin-2">
      <p>
        Download my <a href="https://drive.google.com/file/d/14JfQiNgnzpyQQy4NNphURFC1etl9N-vH/view?usp=sharing">resume</a>
        </p>
        <h3>Front-end skills:</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h3>Back-end skills:</h3>
        <ul className="skills">
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>APis</li>
          <li>Node</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
