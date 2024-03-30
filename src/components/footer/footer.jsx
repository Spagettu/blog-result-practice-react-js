import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEYS } from "./constant/api-keys";

const FooterDiv = styled.div({
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  alignContent: "center",
  height: "120px",
  padding: "20px 40px",
  backgroundColor: "#eeee",
  boxShadow: "0 -3px 10px -1px black",
  width: "1000px",
  fontWeight: "bold",
});

export const Footer = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=${API_KEYS.WEATHER_API}`
      )
      .then(({ data: { name, main, weather } }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  });
  return (
    <FooterDiv>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {city},{" "}
          {new Date().toLocaleString("ru", { day: "numeric", month: "long" })}
        </div>
        <div>
          {temperature} градусов, {weather}
        </div>
      </div>
    </FooterDiv>
  );
};
