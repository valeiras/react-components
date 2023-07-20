import './App.css';
import { Navbar, Loading } from './components';
import { useFetch } from './hooks';
import sections from './assets/sections';
import { useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

function App() {
  const [currSection, setCurrSection] = useState(sections[0]);
  const { isLoading, isError, data: user } = useFetch(url);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <>
      <Navbar
        sections={sections}
        currSection={currSection}
        setCurrSection={setCurrSection}
      />
      <p>Current section: {currSection.name}</p>
      <p>Loaded user: {user.name}</p>
    </>
  );
}

export default App;
