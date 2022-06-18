import React, { useState, useEffect } from 'react';
import Loading from '../component/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  if (loading) {
    return <Loading />;
  }
};

export default Home;
