import React from 'react';
import profileImg from '../../assets/bg-pp/profile-pic.jpg';

function About() {
  return (
    <section className="margin-5">
      <div className="margin-2">
        <div className="profile-img margin-5">
        <img src={profileImg} alt="red galaxy background"></img>
        </div>
        <p>
        My name is Oscar Flores. I was born and raised in San Diego California, and I am a future web developer who is trying to get his foot in the door of this very complex yet amazing industry. I am currently attending a full stack bootcamp provided by UCSD extension out of my hometown San Diego. Prior to starting this coding bootcamp I was attending Southwestern College with the plan being to get an associates for transfer with my major being computer science. That turned out to be pretty tedious, and got boring quite quickly which is when I started to look for other options and came across this program. My love for computers and technology in general came about fairly young, but it wasn’t until highschool that I started to get serious about wanting to make a career out of programming. This course has taught me various skills that I believe I can implement at a high level in a work environment like HTML, CSS,and JavaScript. I’m sure this small sample of my work will demonstrate the understanding and skill that you are looking for in a future employee. Thank you.
        </p>
      </div>
    </section>
  );
}

export default About;
