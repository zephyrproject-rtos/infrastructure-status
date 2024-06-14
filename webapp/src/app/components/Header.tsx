import styled from "styled-components";
import logoImage from '../../../public/logo.png'

const Logo = styled.img`
  width: 40px;
  margin: 0px 15px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

export const Header = () => (
  <Title><Logo src={logoImage.src} />Zephyr Project Infrastructure Status</Title>
);
