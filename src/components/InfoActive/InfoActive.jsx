import { Button, InfoDiv, Text, Tweets } from "./InfoActive.styled";

export const InfoActive = ({followers, onClick}) => {
  return (
      <InfoDiv>
          <Tweets>777 tweets</Tweets>
          <Text>{followers} followers</Text>
      <Button type="button" onClick={onClick}>FOLLOWING</Button>
    </InfoDiv>
  );
};