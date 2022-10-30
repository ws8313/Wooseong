import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Container, flexCenter, media } from "../../styles/theme";

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
    title: "이런게 나의 영화 인생캐 일리가",
    type: "팀 프로젝트",
    info: "코로나 상황에 따른 간단한 심리 테스트를 통해 사용자의 성격(MBTI)을 특정짓고, 나와 주인공의 MBTI에 따라 영화를 추천해주는 서비스입니다.",
    date: "2021.12.21 - 2022.01.08",
    link: "https://github.com/ws8313/SoulMateMovieCharacter",
  },
  {
    id: "3",
    title: "직업 심리 검사 서비스",
    type: "개인 프로젝트",
    info: "커리어넷에서 제공하는 직업심리검사 API를 사용하여 사용자의 직업 적합도를 확인할 수 있는 웹 서비스입니다.",
    date: "2021.11.16 - 2021.11.27",
    link: "https://github.com/ws8313/personalproject-psychologicaltest",
  },
];

const titleAnimation = keyframes`
  0% {
    margin-top: 100vh;
  }
  100% {
    margin-top: -55rem;
  }
`;

const Wrapper = styled(Container)`
  margin-top: 15rem;
  height: 75rem;
  overflow: hidden;
  position: relative;
  ${flexCenter};

  ${media.mobile} {
    /* margin-top: 15rem; */
  }

  .project-title-animation {
    animation: ${titleAnimation} 2s forwards;
  }
  .title-opacity {
    margin-top: 100vh;
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

    ${media.mobile} {
      font-size: 5rem;
    }
  }
  .container {
    position: absolute;
    top: 8rem;
    width: 98rem;

    ${media.mobile} {
      top: 3rem;
      width: 100%;
    }

    .title {
      width: 100%;
      ${flexCenter};
      justify-content: space-between;
      font-weight: 200;
      font-size: 6.4rem;
      line-height: 7.8rem;
      width: 100%;
      text-align: center;

      ${media.mobile} {
        font-size: 3rem;
        justify-content: space-around;
        margin-top: 3rem;
      }
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
      margin-top: 7rem;
      align-items: start;

      ${media.mobile} {
        display: none;
      }
    }

    .projects-shadow {
      width: 100%;
      height: 5rem;
      top: 10rem;
      z-index: 100;
      left: 0;
      position: absolute;
      background: linear-gradient(#000, #00000000);
    }
    .projects-shadow-2 {
      width: 100%;
      height: 5rem;
      bottom: -1rem;
      z-index: 100;
      left: 0;
      position: absolute;
      background: linear-gradient(#00000000, #000);
    }
    .projects-mobile {
      display: none;
      ${media.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 5rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
        box-sizing: border-box;
        overflow-y: scroll;
        height: 70vh;
        gap: 2rem;
        position: relative;
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
        position: absolute;
        left: 0;
        bottom: 0;
    } */
`;

const ProjectBox = styled.div<{ link: boolean }>`
  width: 100%;

  ${media.mobile} {
    width: auto;
  }

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
  .type {
    font-size: 12px;
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

      if (window.scrollY > 2800) {
        title1.classList.add("project-title-animation");
      } else {
        title1.classList.remove("project-title-animation");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper id="project">
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
              <div className="project-title type">{project.type}</div>
              <div className="info">{project.info}</div>
              {/* <div className="project-title">{project.date}</div> */}
            </ProjectBox>
          ))}
        </div>

        <div className="projects-shadow" />
        <div className="projects-shadow-2" />

        <div className="projects-mobile">
          {projects.map((project) => (
            <ProjectBox
              // className="box"
              link={project.link ? true : false}
              onClick={() => project.link && window.open(project.link)}
            >
              <div className="project-title">{project.title}</div>
              <div className="project-title type">{project.type}</div>
              <div className="info">{project.info}</div>
              {/* <div className="project-title">{project.date}</div> */}
            </ProjectBox>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
