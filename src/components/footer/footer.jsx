import React, { useState } from "react";
import styled from "styled-components";

const FooterDiv = styled.div({
  display: "flex",
  position: "fixed",
  bottom: "0",
  justifyContent: "space-between",
  alignContent: "center",
  height: "120px",
  padding: "20px 40px",
  backgroundColor: "#eeee",
  boxShadow: "0 -5px 3px -1px black",
  width: "1000px",
  fontWeight: "bold",
});

export const Footer = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  return (
    <FooterDiv>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          City;
          {new Date().toLocaleString("ru", { day: "numeric", month: "long" })}
        </div>
        <div>temp градусов, weather</div>
      </div>
    </FooterDiv>
  );
};
