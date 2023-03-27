import React, { useState, useEffect } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchJob = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      //console.log(jobs);
      setIsLoading(false);
      setJobs(jobs);
      setCurrentItem(jobs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading">Loading...</div>
      </section>
    );
  }
  return (
    <div>
      <h2 className="title">job experiences</h2>
      <div className="underline"></div>
      <section className="jobs-center">
        <div>
          <BtnContainer
            jobs={jobs}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
        <div>
          <JobInfo jobs={jobs} currentItem={currentItem} />
        </div>
      </section>
    </div>
  );
}

export default App;
