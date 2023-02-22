import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { selectUser } from "../features/UserSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <Screen>
      <Navbar />
      <ProfileBody>
        <h1>Edit Profile</h1>
        <Info>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt="profile"
          />
          <Details>
            <h2>{user.email}</h2>
            <Plans>
                <h3>Plans</h3>
              <button onClick={() => signOut(auth)}>Sign Out</button>
            </Plans>
          </Details>
        </Info>
      </ProfileBody>
    </Screen>
  );
};

export default ProfileScreen;

const Screen = styled.div`
background: #181818;
height: 100vh ;



`;

const ProfileBody = styled.div`
display: flex ;
flex-direction: column ;
color: white; 
width: 50% ;
margin: 0 auto ;
padding-top: 8% ;
max-width: 800px ;
h1 {
    font-size: 60px ;
    font-weight: 400 ;
    border-bottom: 2px solid #282c2d ;
    margin-bottom: 20px ;
}
`;

const Info = styled.div`
display: flex ;

img {
    height: 108px ;
}
`;

const Details = styled.div`
margin-top: -11px ;
margin-left: 25px ; 
flex: 1 ;

h2 {
     background-color: gray ;
     padding: 15px  20px;
     font-size: 15px ;
     
}
`;

const Plans = styled.div`
margin-top: 20px ;

button {
    padding: 10px 20px ;
    font-size: 1rem ;
    font-weight: 600 ;
    width: 100% ;
    cursor: pointer ;
    background-color:#E62E2D ;
    color: #fff ;
    border-radius: 5px ;
    border: none ;
}

h3 {
    border-bottom: 2px solid #282c2d ;
    padding-bottom: 10px ;
}
`;
