import styled from "styled-components";
import { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

 

  const register = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = async(e) => {
    e.preventDefault();
     await signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
     .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Screen>
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span>New to Netflix?</span>
          <div onClick={register}>Sign up now.</div>
        </h4>
      </form>
    </Screen>
  );
};

export default SignUpScreen;

const Screen = styled.div`
  max-width: 300px;
  padding: 30px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 5px;
  margin-top: -3rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 10px;
      outline: 0;
      height: 30px;
      border: none;
      max-width: 600px;
      border-radius: 5px;
    }

    button {
      padding: 16px 20px;
      font-size: 1rem;
      color: white;
      background-color: #e62e2d;
      border-radius: 5px;
      border: none;
      font-weight: 600;
      letter-spacing: 0.5px;
      cursor: pointer;
      margin-top: 20px;
    }

    h1 {
      text-align: left;
    }

    h4 {
      margin-top: 30px;

      span {
        color: gray;
      }

      div {
        display: inline;
      }
      div:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
