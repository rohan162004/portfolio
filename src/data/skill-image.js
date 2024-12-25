import bootstrap from '../assets/svg/skills/bootstrap.svg';
import c from '../assets/svg/skills/c.svg';
import css from '../assets/svg/skills/css.svg';
import git from '../assets/svg/skills/git.svg';
import html from '../assets/svg/skills/html.svg';
import java from '../assets/svg/skills/java.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import mongoDB from '../assets/svg/skills/mongoDB.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import react from '../assets/svg/skills/react.svg';
import tailwind from '../assets/svg/skills/tailwind.svg';
import wordpress from '../assets/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'javascript':
      return javascript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'c':
      return c;
    case 'java':
      return java;
    case 'wordpress':
      return wordpress;
    case 'html':
      return html;
    case 'react':
      return react;
    case 'css':
      return css;
    case 'git':
      return git;
    case 'tailwind':
      return tailwind;
    default:
      break;
  }
}
