import React from 'react';

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/oscarif04"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/oscar-flores-776520211/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/17402143/oscar-flores"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
