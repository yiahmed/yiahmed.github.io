import React from 'react';
import './Home.css';
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Yahya Ahmed</h2>
        <div className='prompt'>
          <h3>I'm a Full-Stack Developer</h3>
        </div>
        <div className='about-me'>
        <p>Hi there! I am a full-stack developer with a passion for problem-solving and being creative. I am also a fitness enthusiast who enjoys pushing my limits and staying active. As a developer, I am constantly looking for new challenges and opportunities to grow my skills. Currently, I am actively seeking internships to further my knowledge and gain practical experience in the field. One quote that I live by is "There is no elevator to success, You have to take the stairs" by Zig Ziglar. This quote motivates me to work hard and persevere through any obstacles that come my way. I believe that with dedication and hard work, anything is possible, and I am excited to see where my journey as a developer takes me.</p>
        </div>
      </div>
      <div className='skills'>
        <h2>Techstack</h2>
        <ol className='list'>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-ruby" width='77' />
              <p className='iconName'>Ruby</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-rails" width='77' />
              <p className='iconName'>Rails</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-reactjs" width='77' />
              <p className='iconName'>React.js</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-js-official" width='77' />
              <p className='iconName'>JavaScript</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-html" width='77' />
              <p className='iconName'>HTML5</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-css" width='77'/>
              <p className='iconName'>CSS</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-pgsql" width='77' />
              <p className='iconName'>PostgreSQL</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-yarn" width='77' />
              <p className='iconName'>Yarn</p>
            </div>
            </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-jest" width='77' />
              <p className='iconName'>Jest</p>
            </div>
          </li>
          <li className='item'>
            <div>
              <Icon icon="vscode-icons:file-type-rspec" width='77' />
              <p className='iconName'>Rspec</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
