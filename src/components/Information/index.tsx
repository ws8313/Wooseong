import styled from "styled-components";
import { Container, flexCenter, theme } from "../../styles/theme";

const infos = [
  {
    id: "Activities",
    contents: [
      {
        id: "1",
        title: "2022 Open Source Contribution Academy",
        type: "2022 오픈소스 컨트리뷰션 아카데미",
        info: "컨트리뷰션 Challenges - 모던 자바스크립트 튜토리얼",
        date: "2022.07.08 - 2022.08.10",
      },
      {
        id: "2",
        title: "2022 Open Source Contribution Academy",
        type: "2022 오픈소스 컨트리뷰션 아카데미",
        info: "컨트리뷰션 Masters - 모던 자바스크립트 튜토리얼",
        date: "2022.08.11 - 2022.10.14",
      },
      // {
      //   id: "3",
      //   title: "Elice",
      //   type: "엘리스",
      //   info: "엘리스 AI 트랙 3기",
      //   date: "2021.09.13 - 2022.03.12",
      // },
    ],
  },
  // {
  //   id: "Contribution",
  //   contents: [
  //     {
  //       id: "1",
  //       title: "2022 Open Source Contribution Academy",
  //       type: "2022 오픈소스 컨트리뷰션 아카데미",
  //       info: "컨트리뷰션 Challenges",
  //       date: "2022.07.08 - 2022.08.10",
  //     },
  //   ],
  // },
  // {
  //   id: "Skill",
  //   contents: [
  //     {
  //       id: "1",
  //       title: "Elice",
  //       type: "엘리스",
  //       info: "엘리스 AI 트랙 3기",
  //       date: "2021.09.13 - 2020.03.12",
  //     },
  //   ],
  // },
  // {
  //   id: "Project",
  //   contents: [
  //     {
  //       id: "1",
  //       title: "Portfolio",
  //       type: "개인 프로젝트",
  //       info: "프론트엔드 개발자를 꿈꾸는 김우성의 포트폴리오입니다.",
  //       date: "2022.05.24 - current",
  //     },
  //     {
  //       id: "2",
  //       title: "CONTEAM",
  //       type: "팀 프로젝트",
  //       info: "미디어 콘텐츠를 제작하기 위한 기획안을 둘러보거나, 팀원을 모집하는 서비스입니다.",
  //       date: "2022.03.20 - current",
  //     },
  //     {
  //       id: "3",
  //       title: "NEPLAYLISTS",
  //       type: "팀 프로젝트",
  //       info: "음악의 시각화라는 주제로, 개인이 음악에 대해서 가지는 느낌을 다양한 요소들로 시각화하여, 나만의 음악과 배경을 가진 공간을 만드는 서비스입니다.",
  //       date: "2022.02.08 - 2022.03.12",
  //     },
  //     {
  //       id: "4",
  //       title: "이런게 나의 영화 인생캐 일리가",
  //       type: "팀 프로젝트",
  //       info: "코로나 상황에 따른 간단한 심리 테스트를 통해 사용자의 성격(MBTI)을 특정짓고, 나와 주인공의 MBTI에 따라 영화를 추천해주는 서비스입니다.",
  //       date: "2021.12.21 - 2022.01.08",
  //     },
  //     {
  //       id: "5",
  //       title: "직업 심리 검사 서비스",
  //       type: "개인 프로젝트",
  //       info: "커리어넷에서 제공하는 직업심리검사 API를 사용하여 사용자의 직업 적합도를 확인할 수 있는 웹 서비스입니다.",
  //       date: "2021.11.16 - 2021.11.27",
  //     },
  //   ],
  // },
];

const Wrapper = styled(Container)`
  .container {
    width: 100%;
    height: 70rem;
    position: sticky;
    top: 2rem;
    .box {
      width: 100rem;
      margin-top: 5rem;
      .title {
        ${flexCenter};
        justify-content: space-between;
        /* text-align: start; */
        font-weight: 700;
        font-size: 3rem;
        line-height: 4rem;
        .type {
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 1.4rem;
        }
      }
      /* .type {
                margin-top: 4rem;
                text-align: end;
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 2.2rem;
            } */
      .info {
        margin-top: 0.6rem;
        font-size: 1.5rem;
        line-height: 2.2rem;
      }
      .date {
        margin-top: 0.4rem;
        text-align: end;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
    /* &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    } */
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    /* &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    } */
    /* &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    } */
    /* &:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    } */
  }
`;

const Title = styled.div<{ title: string }>`
  text-align: start;
  font-weight: bold;
  font-size: 6.4rem;
  line-height: 7.8rem;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${theme.color.black};
  position: relative;
  ::after {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${theme.color.blue};
    opacity: 0.7;
  }
  ::before {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${theme.color.dark_green};
    opacity: 0.7;
  }
`;

const Information = () => {
  return (
    <Wrapper>
      {infos.map((info) => (
        <div className="container">
          <div>
            <Title title={info.id}>{info.id}</Title>
            {info.contents.map((content) => (
              <div className="box">
                <div className="title">
                  <div>{content.title}</div>
                  <div className="type">{content.type}</div>
                </div>
                {/* <div className="type">{content.type}</div> */}
                <div className="info">{content.info}</div>
                <div className="date">{content.date}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Information;
