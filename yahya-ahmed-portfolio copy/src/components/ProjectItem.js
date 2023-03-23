import React from 'react';

const ProjectItem = ({ name, videoSrc }) => {
  return (
    <div className='projectItem'>
      <h1>{name}</h1>
      <video src={videoSrc} autoPlay loop muted />
    </div>
  );
};

export default ProjectItem;
