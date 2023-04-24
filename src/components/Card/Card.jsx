import { Info } from 'components/Info/Info';
import { InfoActive } from 'components/InfoActive/InfoActive';
import { useState } from 'react';
import { AvatarStyled, CardDiv, LineStyled, LogoStyled, MainImg } from './Card.styled';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import MainPicture from '../../images/picture2.png';
import Line from '../../images/Rectangle1.png';
import Avatar from '../../images/Boy.png';

export const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    if (!isActive) {
      setFollowers(followers + 1);
      setIsActive(true);
    } else {
      setFollowers(followers - 1);
      setIsActive(false);
    }
  };

  return (
      <CardDiv>
          <LogoStyled>
              <Logo />
          </LogoStyled>
              <MainImg src={MainPicture} alt='Main Picture' />
              <LineStyled src={Line} alt='Line' />
              <AvatarStyled src={Avatar} alt='Avatar' />
      {isActive ? (
        <InfoActive followers={followers} onClick={handleClick} />
      ) : (
        <Info followers={followers} onClick={handleClick} />
      )}
    </CardDiv>
  );
};
