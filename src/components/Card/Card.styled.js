import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background-image: linear-gradient(310deg, #471ca9, #5736a3, #4b2a99);
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  display: flex;
  justify-content: center;
  color: #ebd8ff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.09;
  text-transform: uppercase;
`;

export const MainImg = styled.img`
position: absolute;
top: 28px;
left: 36px;
right: 36px;
`;

export const LogoStyled = styled.a`
position: absolute;
top: 20px;
left: 20px;
`;

export const LineStyled = styled.img`
  position: absolute;
  top: 214px;
  width: 380px;
`;

export const AvatarStyled = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
`;