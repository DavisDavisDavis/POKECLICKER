import styled, { css } from "styled-components";

const Health = styled.div`
  ${(props) =>
    props.hp &&
    css`
      width: ${props.hp}%;
    `}
  height: 100%;
  background: red;
`;

const HealthBarContainer = styled.div`
  width: 10rem;
  height: 1rem;
  padding: 10px;

  border-radius: 10px;
  background: blueviolet;
`;

const HealthBar = (props) => {
  return (
    <HealthBarContainer>
      <Health hp={props.hp}></Health>
    </HealthBarContainer>
  );
};

export default HealthBar;
