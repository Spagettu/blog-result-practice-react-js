/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Footer, StyledHeader } from "./components";
import { Authorization, Registration, Users } from "./pages";
import { server } from "./bff";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";

const Content = styled.div({
  paddingTop: "30px",
  marginTop: "100px",
});

const AppColumn = styled.div({
  width: "1000px",
  minHeight: "100%",
  margin: "0 auto",
  backgroundColor: "#fff5",
});

function Blog() {
  const dispath = useDispatch();

  useEffect(() => {
    server.authorize("admin", "admin1").then(({ res, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      dispath(setUser(res));
    });
  }, []);

  return (
    <AppColumn>
      <StyledHeader />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
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
