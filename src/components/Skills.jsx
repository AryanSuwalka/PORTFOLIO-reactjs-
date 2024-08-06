import React from 'react';
import '../styles/skill.css';
function Skills() {
  const skills = [
    { name: 'GRAPHIC', value: 80 },
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 70 },
    { name: 'JAVASCRIPT', value: 50 },
    
  ];

  return (
    <section className="skill_section">
      <h2 className="title">
        MY <span className="title_end">SKILLS</span>
      </h2>
      <div className="skill_meters">
        {skills.map((skill, index) => (
          <div className="skill-1 skillx" key={index}>
            <h3>{skill.name}</h3>
            <div className={`meter-circle ${skill.name.toLowerCase()}`}>
              <progress value={skill.value} max="100" min="0"></progress>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
