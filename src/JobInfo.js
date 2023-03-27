import React from "react";
import Duty from "./Duty";

const JobInfo = ({ jobs, currentItem }) => {
  return (
    <article className="job-info">
      <h3>{currentItem.title}</h3>
      <h4>{currentItem.company}</h4>
      <p>{currentItem.dates}</p>
      <Duty duties={currentItem.duties} />
    </article>
  );
};

export default JobInfo;
