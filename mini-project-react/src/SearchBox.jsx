import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4a8f4ce46659877e4f947909bfcdb4ad";

  const getWeather = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsRes = await response.json();

      if (jsRes.cod !== 200) {
        setError(true);
        return null;
      }

      let result = {
        city: jsRes.name,
        temp: jsRes.main.temp,
        tempMin: jsRes.main.temp_min,
        tempMax: jsRes.main.temp_max,
        humidity: jsRes.main.humidity,
        feelslike: jsRes.main.feels_like,
        weather: jsRes.weather[0].description,
      };

      return result;
    } catch (err) {
      setError(true);
      return null;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    let newinformation = await getWeather();
    if (newinformation) {
      updateInfo(newinformation);
      setCity("");
    }
  };

  return (
    <div className="Search">
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
};

export default SearchBox;
