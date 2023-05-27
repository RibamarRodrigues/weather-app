const KEY = 'ea66be4eb95146b9805181404232305';

const fetchData =  async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const fetchData = fetchResponse.json();
  return fetchData;
}

export default fetchData;