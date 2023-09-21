import react from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import pic from "../Assets/apple_store_logo-removebg-preview.png";
import pics from "../Assets/play-store-logo.png";
const Footer = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <h1>Join our community today</h1>
          <p>
            Do you love photography? Want to constantly stay inspired and be
            surrounded by millions of like-minded creators? Then sign-up today
            and get rewarded for your love of photography.
          </p>

          <Button>Sign up</Button>
        </Wrap>
      </Container>
      <Main>
        <Holder>
          <Company>
            <h2>Company</h2>
            Newsroom
            <br />
            <br />
            About us
            <br />
            <br />
            Careers
          </Company>
          <Community>
            <h2>Community</h2>
            Popular photos
            <br />
            <br />
            Editors' Choice
            <br />
            <br />
            Quests Portfolio
          </Community>
          <Lincesing>
            <h2>Licensing</h2>
            About Licensing
            <br />
            <br />
            Become a Contributor
            <br />
            <br />
            Submission requirements
            <br />
            <br />
            Content types
            <br />
            <br />
            Distribution
          </Lincesing>
          <Social>
            <h2>Social</h2>
            <FaFacebookF />
            Facebook
            <br />
            <br />
            <FaTwitter />
            Twitter
            <br />
            <br />
            <RiInstagramLine />
            Instagram
            <br />
            <br />
            <FaPinterest />
            Pinterest
          </Social>
          <Download>
            <h2>Download the app</h2>
            <img src={pic} />
            <img src={pics} />
          </Download>
        </Holder>
        <hr />
        <P>&copy; 500px</P>
      </Main>
    </div>
  );
};

export default Footer;

const P = styled.div`
  margin-left: 90px;
  font-size: 20px;
  font-weight: 600;
`;

const Download = styled.div`
  /* background-color: #e7e541; */
  height: 30vh;
  width: 20%;
  img {
    width: 150px;
  }
`;

const Social = styled.div`
  /* background-color: #b5eb36; */
  height: 30vh;
  width: 12%;
`;

const Lincesing = styled.div`
  /* background-color: #5ad8d8; */
  height: 30vh;
  width: 12%;
`;

const Community = styled.div`
  /* background-color: #44b97f; */
  height: 30vh;
  width: 12%;
`;

const Company = styled.div`
  /* background-color: aqua; */
  height: 30vh;
  width: 12%;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 40px;
`;

const Main = styled.div`
  /* background-color: burlywood; */
  height: 50vh;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: 80vh;
  }

  hr {
    width: 88%;
    background-color: black;
    margin-top: 60px;
  }

  h3 {
  }
`;

const Button = styled.button`
  background-color: white;
  padding: 15px 70px;
  margin-left: 37%;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    color: blue;
  }
`;

const Wrap = styled.div`
  /* background-color: bisque; */
  height: 30vh;
  width: 50%;

  h1 {
    color: white;
    text-align: center;
    font-size: 40px;
  }

  p {
    text-align: center;
    color: white;
  }
`;

const Container = styled.div`
  background-color: rgb(69, 69, 124);
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
