import { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';
import './styles/App.css';

function App() {
  const [city, SetCity] = useState('');
  const [data, SetData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response)=> {
      SetData(response);
    })
  }

  return (
    <>
      <main>
        <form onSubmit={ handleSubmit }> 
          <input type="text" id="search" placeholder="Cidade" required 
          onChange={({target}) => SetCity(target.value)}
          value={city}/>
          <input type="submit" />
        </form>
        <>
          <Card data={data} />
        </>
      </main>
    </>
  )
}

export default App;
