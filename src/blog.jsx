/* eslint-disable react/prop-types */
import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Footer, Modal, StyledHeader } from "./components";
import { Authorization, Post, Registration, Users } from "./pages";
import { server } from "./bff";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";

const Content = styled.div({
  margin: "20px",
  padding: "120px 0 0",
});

const AppColumn = styled.div({
  width: "1000px",
  minHeight: "100%",
  margin: "0 auto",
  backgroundColor: "#fff5",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

function Blog() {
  const dispath = useDispatch();

  useLayoutEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userData"));
    if (user) {
      server.authorize(user.login, user.password).then(({ res, error }) => {
        if (error) {
          console.log(error);
          return;
        }
        dispath(setUser(res));
      });
    } else return;
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
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/:postId/edit" element={<Post />} />
          <Route path="/post" element={<div>New Post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer />
      <Modal />
    </AppColumn>
  );
}

export default Blog;
