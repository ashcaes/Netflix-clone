import styled from "styled-components";
import { useState } from "react";
import SignUpScreen from "../components/SignUpScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <Container>
      <Background>
        <Logo
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="background"
        />
        <SignInButton onClick={() => setSignIn(true)}>Sign in</SignInButton>
        <Gradient></Gradient>
      </Background>
      <LoginBody>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV Shows and more.</h1>
            <h2>Watch anywhere ,Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <InputForm>
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </InputForm>
          </>
        )}
      </LoginBody>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: 100%;
  background: url("https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg")
    center no-repeat;
  background-size: cover;
`;

const Background = styled.div``;

const Logo = styled.img`
  position: fixed;
  left: 0;
  width: 150px;
  object-fit: contain;
  padding-left: 20px;
`;

const SignInButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e62e2d;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const LoginBody = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  color: #fff;

  h1 {
    text-align: center;
    font-size: 2.125rem;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.8px;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

const InputForm = styled.div`
  padding: 10px;

  form {
    input {
      padding: 10px;
      outline-width: 0;
      height: 30px;
      width: 30%;
      border: none;
      max-width: 600px;
    }

    button {
      padding: 0.9rem 20px;
      font-size: 1rem;
      color: #fff;
      background-color: #e62e2d;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
