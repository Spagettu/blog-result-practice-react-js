import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
const Header = () => "header";
const Footer = () => "Footer";
const Content = styled.div({
  padding: "120px 0",
});

function Blog() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
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
    </>
  );
}

export default Blog;
