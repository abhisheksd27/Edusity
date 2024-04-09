import React from 'react';
import './Programs.css';

const Programs = ({ programs }) => {
  return (
    <div className='programs'>
      {programs.map((program, index) => (
        <div className="program" key={index}>
          <img src={program.image} alt="" />
          <div className="caption">
            <img src={program.icon} alt="" />
            <p>{program.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Programs;
