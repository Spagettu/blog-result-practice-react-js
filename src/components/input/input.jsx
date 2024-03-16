/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return <InputContainer className={className} {...props} ref={ref} />;
});

const InputContainer = styled.input({
  height: "30px",
  width: ({ width = "100%" }) => width,
  margin: "0 0 10px",
  padding: "10px",
  fontSize: "18px",
  border: "1px soid #000",
});
