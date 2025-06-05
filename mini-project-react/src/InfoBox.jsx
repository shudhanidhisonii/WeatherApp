import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";

const InfoBox = ({ info }) => {
  const INIT_URL = "https://media.nbcnewyork.com/2019/09/7633ebe39a734c329913c5af873389b4.jpg?quality=85&strip=all&fit=4928%2C3264";

const HOT_URL="https://www.befunky.com/images/wp/wp-2022-07-Summer.LensFlare.jpg?auto=avif,webp&format=jpg&width=944";
const COLD_URL="https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
const RAIN_URL="https://media.istockphoto.com/id/1476189983/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=612x612&w=0&k=20&c=IwJXd2bk5O65aF5XZwoB-WJiFpCIrmbZltgbQTXNNkk="
  return (
    <div className="infoBox">
      <div className="cardss">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <BeachAccessIcon /> : <AcUnitIcon />}

            </Typography>
            <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C.</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
