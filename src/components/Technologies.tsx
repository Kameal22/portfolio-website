import {
  SubContainer,
  SubContainerText,
  TechnologiesItem,
  TechnologiesList,
  TechnologiesListContainer,
} from "../styles/Main.styled";

const technologies = [
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Typescript/Javascript",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "Mongoose",
  "Html",
  "Css",
  "Git",
  "REST API",
  "Styled Components",
];

const Technologies: React.FC = () => {
  return (
    <SubContainer>
      <SubContainerText style={{ textAlign: "center" }}>
        Technologies I specialize in
      </SubContainerText>

      <TechnologiesListContainer>
        <TechnologiesList>
          {technologies.map((item) => (
            <TechnologiesItem key={item}>{item}</TechnologiesItem>
          ))}
        </TechnologiesList>
      </TechnologiesListContainer>
    </SubContainer>
  );
};

export default Technologies;
