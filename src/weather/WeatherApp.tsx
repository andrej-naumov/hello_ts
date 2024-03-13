import React, { useState } from "react";
import { WeatherData } from "./WeatherDataTypes";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const YOUR_APP_ID = "341416a0ff27ce881f56e6873c9330d3";
  // Определяем функцию для конвертации температуры из Кельвинов в градусы Цельсия
  const kelvinToCelsius = (tempKelvin: number) => {
    return (tempKelvin - 273.15).toFixed(2); // Округляем результат до двух знаков после запятой
  };

  const getWeather = () => {
    if (city === "") {
      alert("Пожалуйста, введите название города");
      return;
    }

    setLoading(true);
    setError("");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_APP_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка при получении данных о погоде");
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <p>Погодные данные по городу:</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите название города"
      />
      <button onClick={getWeather}>Получить погоду</button>

      {loading && <p>Загрузка...</p>}
      {weatherData && (
        <div>
          <p>Температура: {kelvinToCelsius(weatherData.main.temp)} °C</p>
          <p>Описание: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default WeatherApp;
