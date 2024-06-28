import styled, { keyframes } from "styled-components";

const slideInFromTop = keyframes`
  0% {
    transform: translate(-50%, -250%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const StyledMain = styled.main`
  height: 100dvh;
  background-color: #262626;
  background-image: linear-gradient(0deg, #262626 0%, #000000 100%);

  padding: 2rem;

  @media (max-width: 1080px) {
    padding: 0.5rem;
  }
`;

export const StyledContainer = styled.div`
  border: 1px solid #eeeeee90;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media (max-width: 1080px) {
    padding: 1rem;
  }
`;

export const StyledHeading = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 3rem;
  font-family: "Quicksand", sans-serif;
`;

export const StyledDescription = styled.p`
  color: white;
  font-weight: 100;
  font-size: 1rem;
`;

export const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

interface StyledMenuListProps {
  isFlex?: boolean;
}

export const StyledMenuList = styled.ul<StyledMenuListProps>`
  display: ${(props) => (props.isFlex ? "flex" : "")};
  gap: ${(props) => (props.isFlex ? ".5rem" : "")};
  margin-top: ${(props) => (props.isFlex ? "0" : "2rem")};
  list-style: none;
  width: fit-content;
`;

interface MenuItemProps {
  isFun?: boolean;
}

export const StyledMenuItem = styled.li<MenuItemProps>`
  color: ${(props) => (props.isFun ? "#70e000" : "white")};
  font-size: 0.85rem;
  margin-top: 0.5rem;
  font-weight: 300;

  &:hover {
    cursor: pointer;
    font-weight: 500;
  }

  @media (max-width: 780px) {
    font-size: 0.8rem;
  }
`;

interface SubContainerProps {
  isSmaller?: boolean;
}

export const SubContainer = styled.div<SubContainerProps>`
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 780px) {
    width: 98%;
    padding: 0;
  }

  /* Custom Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
    border: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

interface SubContainerTextProps {
  isSmallerSize?: boolean;
  isSmallerHeight?: boolean;
}

export const SubContainerText = styled.h2<SubContainerTextProps>`
  color: white;
  font-weight: 300;
  line-height: ${(props) => (props.isSmallerHeight ? "1.8rem" : "2.5rem")};
  font-size: ${(props) => (props.isSmallerSize ? "1.1rem" : "1.8rem")};

  @media (max-width: 1380px) {
    font-size: ${(props) => (props.isSmallerSize ? "1.05rem" : "1.4rem")};
    line-height: ${(props) => (props.isSmallerHeight ? "1.6rem" : "2rem")};
  }

  @media (max-width: 780px) {
    font-size: ${(props) => (props.isSmallerSize ? ".95rem" : "1.2rem")};
    line-height: ${(props) => (props.isSmallerHeight ? "1.4rem" : "1.6rem")};
  }

  @media (max-width: 599px) {
    font-size: ${(props) => (props.isSmallerSize ? ".85rem" : "1.1rem")};
    line-height: ${(props) => (props.isSmallerHeight ? "1.3rem" : "1.6rem")};
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  p {
    color: white;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const FooterIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const WorkHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WorkHistoryList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface WorkHistoryListItemProps {
  isCompany?: boolean;
  isPosition?: boolean;
  isDate?: boolean;
}

export const WorkHistoryListItem = styled.li<WorkHistoryListItemProps>`
  color: white;
  font-size: ${(props) =>
    props.isPosition
      ? "1.4rem"
      : props.isCompany
      ? "1.05rem"
      : props.isDate
      ? "0.75rem"
      : null};
  margin-top: 1rem;

  @media (max-width: 1380px) {
    font-size: ${(props) =>
      props.isPosition
        ? "1.25rem"
        : props.isCompany
        ? ".95rem"
        : props.isDate
        ? "0.75rem"
        : null};
  }

  @media (max-width: 780px) {
    font-size: ${(props) =>
      props.isPosition
        ? "1rem"
        : props.isCompany
        ? ".85rem"
        : props.isDate
        ? "0.7rem"
        : null};
  }

  @media (max-width: 599px) {
    font-size: ${(props) =>
      props.isPosition
        ? ".9rem"
        : props.isCompany
        ? ".75rem"
        : props.isDate
        ? "0.7rem"
        : null};
  }
`;

export const TechnologiesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TechnologiesList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TechnologiesItem = styled.li`
  color: white;
  font-size: 1rem;
  margin-top: 0.75rem;

  @media (max-width: 780px) {
    font-size: 0.85rem;
  }

  @media (max-width: 599px) {
    font-size: 0.75rem;
  }
`;
