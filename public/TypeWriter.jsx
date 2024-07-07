// TypeWriter.js
import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const StyledTypewriterContainer = styled.div`
  color: black;
  position: absolute;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "40%"};
  font-size: 50px;
`;

function TypeWriter({ strings, top, left }) {
  return (
    <StyledTypewriterContainer top={top} left={left}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(strings.join(" "))
            .pauseFor(10000) // Optional: Pause after typing all strings
            .start();
        }}
        options={{
          autoStart: true,
          loop: false,
          deleteSpeed: 0,
          delay: 100,
        }}
      />
    </StyledTypewriterContainer>
  );
}

export default TypeWriter;
