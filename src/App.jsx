import { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';
import errorData from './helpers/errorData';
import './styles/App.css';

function App() {
  const [city, SetCity] = useState('');
  const [data, SetData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response)=> {
      if (response.error) 
        SetData(errorData);
      else {
        SetData(response);
        SetCity('');
      }
    })
  }

  return (
    <>
      <main>
        <>
          <Card data={data} />
        </>
        <form onSubmit={ handleSubmit }> 
          <input type="text" id="search" placeholder="City" required 
          onChange={({target}) => SetCity(target.value)}
          value={city}/>
          <button type="submit" id="submit">Search</button>
        </form>
      </main>
    </>
  )
}

export default App;
