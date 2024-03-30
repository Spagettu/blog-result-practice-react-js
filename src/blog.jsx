/* eslint-disable react/prop-types */
import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Error, Footer, Modal, StyledHeader } from "./components";
import { Authorization, Main, Post, Registration, Users } from "./pages";
import { server } from "./bff";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";
import { ERROR } from "./constant";

const Content = styled.div({
  margin: "20px",
  padding: "120px 0 0",
});

const AppColumn = styled.div({
  position: "relative",
  width: "1000px",
  minHeight: "100%",
  margin: "0 auto",
  backgroundColor: "#fff",
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
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/:postId/edit" element={<Post />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
        </Routes>
      </Content>
      <Footer />
      <Modal />
    </AppColumn>
  );
}

export default Blog;
