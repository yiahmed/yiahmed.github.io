import React from 'react';
import ProjectItem from '../components/ProjectItem';
import TicTacToe from '../images/TicTacToe.mov';
import './Projects.css';
import PigLatin from '../images/PigLatin.mov'
import TextBasedGame from '../images/TextBasedGame.mov'
import TreasureHunt from '../images/TreasureHunt.mov'

const Projects = () => {
  return (
    <div className='project'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
          <ProjectItem name={'Tic Tac Toe'} videoSrc={TicTacToe}/>
          <ProjectItem name={'Pig Latin Translator'} videoSrc={PigLatin}/>
          <ProjectItem name={'Text Based Story Game'} videoSrc={TextBasedGame}/>
          <ProjectItem name={'Treasure Hunt Game'} videoSrc={TreasureHunt}/>
      </div>
    </div>
  );
};

export default Projects;
