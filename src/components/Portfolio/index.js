import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: 'DayLee-Laugh',
      description: 'An app to make you smile...maybe :)',
      link: "https://sbeltier.github.io/group-project-1-the-daily-laugh/",
      repo: "https://github.com/sbeltier/group-project-1-the-daily-laugh"
    },
    {
      name: 'EventListener',
      description: 'Looking for something to do?',
      link: "https://serene-basin-19147.herokuapp.com/",
      repo: "https://github.com/MSaideman/Event-Listener-App"
    },
    {
      name: 'Password-Generator',
      description: 'In case you forgot your old password and need a new one ASAP',
      link: "https://oscarif04.github.io/PasswordGenerator/",
      repo: "https://github.com/oscarif04/PasswordGenerator"
    },
    {
      name: 'Day-Planner',
      description: 'When you need to plan your day but don\'t have a pen or paper to do it on',
      link: "https://oscarif04.github.io/Day-Planner/",
      repo: "https://github.com/oscarif04/Day-Planner"
    },
    {
      name: 'Note-Taker',
      description: 'If you still don\'t have a pen or paper BUT need to take notes ;)',
      link: "https://note-taker-oscar.herokuapp.com/",
      repo: "https://github.com/oscarif04/note-taker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
