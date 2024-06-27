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
`;

export const StyledContainer = styled.div`
  border: 1px solid #eeeeee90;
  padding: 1.5rem;
  height: 100%;
  position: relative;
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

export const StyledMenuList = styled.ul`
  margin-top: 2rem;
  list-style: none;
  width: fit-content;
`;

interface MenuItemProps {
  isFun?: boolean;
}

export const StyledMenuItem = styled.li<MenuItemProps>`
  color: ${(props) => (props.isFun ? "#70e000" : "white")};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 300;

  &:hover {
    cursor: pointer;
    font-weight: 500;
  }
`;

interface SubContainerProps {
  isSmaller?: boolean;
}

export const SubContainer = styled.div<SubContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${slideInFromTop} 1s ease-in-out forwards;
  padding: 1rem;
  max-width: ${(props) => (props.isSmaller ? "30%" : null)};

  &::after,
  &::before {
    content: "";
    position: absolute;
    background: white;
  }

  &::after {
    width: 26px;
    height: 1px;
    bottom: 0;
    right: 0;
  }

  &::before {
    width: 1px;
    height: 26px;
    bottom: 0;
    right: 0;
  }
`;

interface SubContainerTextProps {
  isSmallerSize?: boolean;
  isSmallerHeight?: boolean;
}

export const SubContainerText = styled.h2<SubContainerTextProps>`
  color: white;
  font-weight: 200;
  line-height: ${(props) => (props.isSmallerHeight ? "2rem" : "2.5rem")};
  font-size: ${(props) => (props.isSmallerSize ? "1.4rem" : "1.8rem")};
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  p {
    color: white;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const WorkHistoryContainer = styled.div`
  margin-top: 1rem;
`;

export const WorkHistoryList = styled.ul`
  list-style: none;
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
`;
