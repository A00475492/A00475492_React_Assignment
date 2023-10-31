import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "./halifax.jpg";
import cold from "./cold.jpg";
import sunny from "./sunny.jpg";
import mild from "./mild.jpg";

const MyTown = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const lat = 44.65107;
    const longt = -63.582687;
    const apiKey = "f6cea595bc0d6689f5dffb32a1f3bfdb";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=f6cea595bc0d6689f5dffb32a1f3bfdb`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  const getWeatherImage = (temperature) => {
    if (temperature <= 283.15) {
      return cold;
    } else if (temperature > 283.15 && temperature < 293.15) {
      return mild;
    } else {
      return sunny;
    }
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToCelsius = (temperature) => {
    return (temperature - 273.15).toFixed(2) + "°C";
  };

  const convertToFahrenheit = (temperature) => {
    const fahrenheit = (temperature - 273.15) * 1.8 + 32;
    return fahrenheit.toFixed(2) + "°F";
  };

  return (
    <div>
      <h3>Town I am living Currently</h3>
      <p>
      Currently, I am living in Halifax. Halifax is a beautiful coastal city.
        I have been living here for 2months and have experienced many
        interesting events and attractions. It has been a great place to
        live.The city is full of vibrant culture, friendly people, and great
        food. There are many outdoor activities to enjoy. Halifax is a great
        place to visit and live.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={img} alt="Halifax" width="30%" />
      </div>
      {weatherData && (
        <div>
          <h4>
            Current temperature of the city is :{" "}
            {isCelsius
              ? convertToCelsius(weatherData.main.temp)
              : convertToFahrenheit(weatherData.main.temp)}
          </h4>
          <button onClick={toggleTemperatureUnit}>
            {isCelsius ? "Convert to Fahrenheit" : "Convert to Celsius"}
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              src={getWeatherImage(weatherData.main.temp)}
              alt="Weather Condition"
              width="15%"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTown;
