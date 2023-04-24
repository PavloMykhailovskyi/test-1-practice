import { Button,InfoDiv, Text, Tweets } from "./Info.styled";

export const Info = ({ followers, onClick }) => {
  return (
    <InfoDiv>
          <Tweets>777 tweets</Tweets>
          <Text>{followers} followers</Text>
      <Button type="button" onClick={onClick}>FOLLOW</Button>
    </InfoDiv>
  );
};
