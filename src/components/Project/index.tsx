import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const projects = [
  {
    id: "1",
    title: "Portfolio",
    type: "개인 프로젝트",
    info: "프론트엔드 개발자를 꿈꾸는 김우성의 포트폴리오입니다.",
    date: "2022.05.24 - current",
    link: "https://github.com/ws8313/wooseong",
  },
  {
    id: "2",
    title: "CONTEAM",
    type: "팀 프로젝트",
    info: "미디어 콘텐츠를 제작하기 위한 기획안을 둘러보거나, 팀원을 모집하는 서비스입니다.",
    date: "2022.03.20 - current",
    link: "",
  },
  {
    id: "3",
    title: "NEPLAYLISTS",
    type: "팀 프로젝트",
    info: "음악의 시각화라는 주제로, 개인이 음악에 대해서 가지는 느낌을 다양한 요소들로 시각화하여, 나만의 음악과 배경을 가진 공간을 만드는 서비스입니다.",
    date: "2022.02.08 - 2022.03.12",
    link: "",
  },
  {
    id: "4",
    title: "이런게 나의 영화 인생캐 일리가",
    type: "팀 프로젝트",
    info: "코로나 상황에 따른 간단한 심리 테스트를 통해 사용자의 성격(MBTI)을 특정짓고, 나와 주인공의 MBTI에 따라 영화를 추천해주는 서비스입니다.",
    date: "2021.12.21 - 2022.01.08",
    link: "",
  },
  {
    id: "5",
    title: "직업 심리 검사 서비스",
    type: "개인 프로젝트",
    info: "커리어넷에서 제공하는 직업심리검사 API를 사용하여 사용자의 직업 적합도를 확인할 수 있는 웹 서비스입니다.",
    date: "2021.11.16 - 2021.11.27",
    link: "",
  },
];

const titleAnimation = keyframes`
  0% {
    margin-top: 100rem;
  }
  100% {
    margin-top: -90rem;
  }
`;

const Wrapper = styled(Container)`
  margin-top: 35rem;
  height: 110rem;
  overflow: hidden;
  position: relative;
  ${flexCenter};
  .project-title-animation {
    animation: ${titleAnimation} 2s forwards;
  }
  .title-opacity {
    margin-top: 20rem;
    width: 100%;
    ${flexCenter};
    justify-content: space-between;
    font-weight: 900;
    font-size: 14.4rem;
    line-height: 17.6rem;
    opacity: 0.2;
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.color.blue}, ${theme.color.red})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container {
    position: absolute;
    top: 8rem;
    width: 98rem;
    .title {
      width: 100%;
      ${flexCenter};
      justify-content: space-between;
      font-weight: 200;
      font-size: 6.4rem;
      line-height: 7.8rem;
      width: 100%;
      text-align: center;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
      margin-top: 7rem;
      padding-bottom: 20rem;
      .box {
      }
    }
  }
  /* .copyright {
        width: 100%;
        text-align: center;
        padding-bottom: 5rem;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.7rem;
    } */
`;

const ProjectBox = styled.div<{ link: boolean }>`
  cursor: ${({ link }) => (link ? "pointer" : "default")};
  div {
    width: 100%;
    text-align: start;
  }
  justify-self: center;
  padding: 1.3rem 0;
  box-sizing: border-box;
  border-bottom: 0.1rem solid transparent;
  .project-title {
    transition: 0.3s;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 0.5rem;
  }
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    border-bottom: 0.1rem solid
      ${({ link, theme }) => (link ? theme.color.red : "transparent")};
    .project-title {
      transition: 0.3s;
      color: ${({ link, theme }) =>
        link ? theme.color.blue : theme.color.white};
    }
  }
`;

const Project = () => {
  useEffect(() => {
    const handleScroll = () => {
      const title1 = document.querySelector(".title-opacity")!;

      if (window.scrollY > 2000) {
        title1.classList.add("project-title-animation");
      } else {
        title1.classList.remove("project-title-animation");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <div className="title-opacity">
        {"PROJECTS".split("").map((v) => (
          <div>{v}</div>
        ))}
      </div>
      <div className="container">
        <div className="title">
          {"PROJECTS".split("").map((v) => (
            <div>{v}</div>
          ))}
        </div>

        <div className="projects">
          {projects.map((project) => (
            <ProjectBox
              // className="box"
              link={project.link ? true : false}
              onClick={() => project.link && window.open(project.link)}
            >
              <div className="project-title">{project.title}</div>
              <div className="project-title">{project.type}</div>
            </ProjectBox>
          ))}
        </div>
        {/* <div className="copyright">Copyright</div> */}
      </div>
    </Wrapper>
  );
};

export default Project;
