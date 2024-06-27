import { SubContainer, SubContainerText } from "../styles/Main.styled";

const About: React.FC = () => {
  return (
    <SubContainer isSmaller>
      <SubContainerText isSmallerHeight isSmallerSize>
        My name is Kamil Czyżewski and I come from Poland. I've been involved in
        Front-End development since 2019. I started learning through courses on
        Udemy while simultaneously working for a small company in my city, where
        I independently created and deployed three basic marketing websites.
        Shortly thereafter, I began collaborating with EXIT Realty Corp.
        International, with whom I continue to work today, creating and
        maintaining numerous projects. These include mobile applications, many
        websites including CMS systems, marketing pages, and internal company
        management services. I also engage in programming as a hobby in my spare
        time. I enjoy working in teams and am seeking opportunities for
        development and honing my skills in interesting projects.
      </SubContainerText>
    </SubContainer>
  );
};

export default About;
