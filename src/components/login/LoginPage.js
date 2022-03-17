import React from "react";
import Nav from "../Nav";
import "../../App.css";
import Container from "../layout/Container";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <>
      <Container>
        <Nav />
        <div>Login page</div>
        <LoginForm />
      </Container>
    </>
  );
}

export default LoginPage;
