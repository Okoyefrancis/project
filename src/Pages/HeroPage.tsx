import React from "react";
import { styled } from "styled-components";
import { BsSearch, BsTextWrap } from "react-icons/bs";
import video from "../Assets/frank.mp4";
import { AiOutlineEye } from "react-icons/ai";
import GlobalButton from "../common/GlobalButton";

const HeroPage = () => {
  return (
    <div>
      <Heroo>
        <Video src={video} autoPlay loop muted />
        <TextContent>
          <General>
            <CardSection>
              <CardRoller>
                <GlobalButton text="Romance" />
                <GlobalButton text="Comedy" />
                <GlobalButton text="Action" />
                <GlobalButton text="Fantasy" />
                <GlobalButton text="Crime" />
                <GlobalButton text="Adventure" />
                <GlobalButton text="Horror" />
                <GlobalButton text="Humor" />
                <GlobalButton text="Fiction" />
                <GlobalButton text="War" />
                <GlobalButton text="Tales" />
                <GlobalButton text="Folklore" />
                <GlobalButton text="Fairy" />
                <GlobalButton text="Satire" />
                <GlobalButton text="Classics" />
                <GlobalButton text="Youth" />
                <GlobalButton text="Opera" />
                <GlobalButton text="Thrillers" />
                <GlobalButton text="Mystery" />
                <GlobalButton text="Literature" />
                <GlobalButton text="Essay" />
                <GlobalButton text="Live" />
                <GlobalButton text="Plays" />
                <GlobalButton text="Gory" />
                <GlobalButton text="Myth" />
              </CardRoller>
            </CardSection>
            <TextSection>
              <Outline>
                <Explore>
                  Explore the world’s leading Books
                  <br /> and Authors
                </Explore>
                <Millions>
                  Millions of designers and agencies around the world showcase
                  their portfolio work <br />
                  on Dribbble - the home to the world’s best design and creative
                  professionals.
                </Millions>
                <Search>
                  <BsSearch style={{ marginLeft: "20px" }} />
                  <Input type="text" placeholder="Search By Author Name" />
                </Search>
              </Outline>
            </TextSection>
          </General>
        </TextContent>
      </Heroo>
    </div>
  );
};

export default HeroPage;

const Input = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  margin-left: 15px;
`;

const Search = styled.div`
  height: 50px;
  width: 55%;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 100px;
  margin-top: 20px;
`;
const Millions = styled.div`
  text-align: center;
  font-size: 15px;
  color: white;
  margin-top: 20px;
`;
const Explore = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;
const Outline = styled.div`
  height: 100%;
  width: 40%;
`;
const TextSection = styled.div`
  height: 63%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardRoller = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  scroll-behavior: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const CardSection = styled.div`
  height: 37%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const General = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContent = styled.div`
  height: 75vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Video = styled.video`
  height: 75vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

const Heroo = styled.div`
  height: 75vh;
  width: 100%;
  background-color: #040404;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
