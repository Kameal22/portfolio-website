import {
  SubContainer,
  SubContainerText,
  WorkHistoryContainer,
  WorkHistoryList,
  WorkHistoryListItem,
} from "../styles/Main.styled";

const workHistory = [
  {
    company: "Merkurion",
    dates: "2019-08 - 2020-08",
    position: "Salesman",
  },
  {
    company: "Merkurion",
    dates: "2020-08 - 2021-08",
    position: "Junior Web Developer",
  },
  {
    company: "Life In Mobile",
    dates: "2021-09 - 2022-12",
    position: "Junior Front-End Developer",
  },
  {
    company: "Life In Mobile",
    dates: "2023-01 - Present",
    position: "Front-End Developer",
  },
];

const WorkHistory: React.FC = () => {
  return (
    <SubContainer>
      <SubContainerText>My Work History</SubContainerText>

      <WorkHistoryContainer>
        {workHistory.map((item) => (
          <WorkHistoryList>
            <WorkHistoryListItem isPosition>
              {item.position}
            </WorkHistoryListItem>
            <WorkHistoryListItem isCompany>{item.company}</WorkHistoryListItem>
            <WorkHistoryListItem isDate>{item.dates}</WorkHistoryListItem>
          </WorkHistoryList>
        ))}
      </WorkHistoryContainer>
    </SubContainer>
  );
};

export default WorkHistory;
