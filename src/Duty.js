import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duty = ({ duties }) => {
  //console.log(duties);
  return (
    <div>
      {duties.map((duty, index) => {
        // id can be passed to key
        const id = uuidv4();
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duty;
