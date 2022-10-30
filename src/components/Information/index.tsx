import styled from "styled-components";
import { Container, flexCenter, media } from "../../styles/theme";

const infos = [
  {
    id: "Careers",
    contents: [
      {
        id: "1",
        title: "저의 성장을 이끌어줄 곳을 찾고 있습니다",
        type: "",
        info: "",
        date: "",
      },
    ],
  },
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
    ],
  },
];

const Wrapper = styled(Container)`
  .container {
    width: 100%;
    height: 70rem;
    position: sticky;
    top: 10rem;

    ${media.mobile} {
      background-color: #000;
      top: 5rem;
      border-radius: 1.5rem;
    }

    .box {
      width: 65rem;
      margin-top: 5rem;

      ${media.mobile} {
        width: 32rem;
        margin-top: 3rem;
      }
      
      .title {
        ${flexCenter};
        justify-content: space-between;
        font-weight: 500;
        font-size: 2.8rem;
        line-height: 4rem;

        ${media.mobile} {
          font-size: 2rem;
        }

        .type {
          font-weight: 300;
          font-size: 1.4rem;
          line-height: 1.4rem;
        }
      }
      .info {
        margin-top: 0.6rem;
        font-size: 1.5rem;
        line-height: 2.2rem;

        ${media.mobile} {
          font-size: 1.5rem;
        }
      }
      .date {
        margin-top: 0.4rem;
        text-align: end;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

const Title = styled.div<{ title: string }>`
  text-align: start;
  font-weight: bold;
  font-size: 6.4rem;
  line-height: 7.8rem;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.white};
  position: relative;

  ${media.mobile} {
    font-size: 5rem;
    margin-top: 1rem;
  }

  ::after {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.red};
    opacity: 0.7;

    ${media.mobile} {
      left: -0.2rem;
      top: -0.2rem;
    }
  }
  ::before {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.blue};
    opacity: 0.7;

    ${media.mobile} {
      left: 0.2rem;
      top: 0.2rem;
    }
  }
`;

const Information = () => {
  return (
    <Wrapper id="information">
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
