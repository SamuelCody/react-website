import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 70px;
`;

const Subtitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

function Feature() {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br /> <b>good</b> business
        </Title>
        <Subtitle>We know that good design means good business.</Subtitle>
        <Description>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Description>
        <Description>
          We care your business and guarantee you to achieve marketing goals.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

export default Feature;
