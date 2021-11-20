import styled from "styled-components";
import { respond, Heading3, TextBold, FlexCol } from "../../styles";

export default function AboutComponent() {
  return (
    <About>
      <Content>
        <Line />
        <Heading3 margin="1.4rem 0" color="var(--color-grey-4)">
          Update your <span>social</span> profile!
        </Heading3>
        <TextBold maxWidth="55rem" align="left">
          At DIGIT EXPO our photographer took some great photos of you, which
          you can download here.
        </TextBold>
        <br />
        <TextBold maxWidth="55rem" align="left">
          Handy to update your social profiles!
        </TextBold>
      </Content>
      <Content>
        <Line />
        <Heading3 margin="1.4rem 0" color="var(--color-grey-4)">
          Upscale your <span>digital</span> profile!
        </Heading3>
        <TextBold maxWidth="55rem" align="left">
          We love to talk to you to see how we can help your team accelerate its
          digital capabilities and upskill the knowledge and expertise of the
          team!
        </TextBold>
      </Content>
    </About>
  );
}
const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${() =>
    respond(
      "xl",
      "flex-direction: row; justify-content: space-around; margin: 2.7rem 0;"
    )}
  ${() =>
    respond(
      "xxl",
      "flex-direction: row; justify-content: space-between; margin: 2.7rem 0;"
    )}
`;
const Content = styled(FlexCol)`
  padding: 6.7rem 2.7rem;
  background-color: white;
  border-radius: 5px;
  ${() =>
    respond(
      "xl",
      `align-items: flex-start; justify-content: flex-start; box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);`
    )}
  p {
    text-align: center;
    ${() => respond("xl", `text-align: left;`)}
  }
`;
const Line = styled.div`
  width: 10rem;
  height: 5px;
  background-color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  margin: 1.4rem 0;
`;
