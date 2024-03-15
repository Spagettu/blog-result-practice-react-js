/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Footer, StyledHeader } from "./components";

const Content = styled.div({
  padding: "120px 0",
});

const AppColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "1000px",
  minHeight: "100%",
  margin: "0 auto",
  backgroundColor: "#fff5",
});

function Blog() {
  return (
    <AppColumn>
      <StyledHeader />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<div>login</div>} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/post/:postId" element={<div>Post</div>} />
          <Route path="/post" element={<div>New Post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default Blog;
