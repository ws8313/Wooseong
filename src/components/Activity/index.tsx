import styled from "styled-components";
import { Container, flexCenter, theme } from "../../styles/theme";

const activities = [
    {
        id: "Activities",
        contents: [
            {
                id: "1",
                title: "Elice",
                korean: "엘리스",
                info: "엘리스 AI 트랙 3기",
                date: "2021.09.13 - 2020.03.12"
            },
        ],
    },
    {
        id: "Project",
        contents: [
            {
                id: "1",
                title: "NEPLAYLISTS",
                korean: "내플리스",
                info: "본 서비스는 음악의 시각화라는 주제로, 개인이 음악에 대해서 가지는 느낌을 다양한 요소들로 시각화하여, 나만의 음악과 배경을 가진 공간을 만드는 서비스입니다.",
                date: "2022.02.08 - 2022.03.12",
            },
            {
                id: "2",
                title: "SoulMateMovieCharacter",
                korean: "이런게 나의 영화 인생캐 일리가",
                info: "이런게 나의 영화 인생캐 일리가는 코로나 상황에 따른 간단한 심리 테스트를 통해 사용자의 성격(MBTI)을 특정짓고, 나와 주인공의 MBTI에 따라 영화를 추천해주는 서비스입니다.",
                date: "2021.12.21 - 2022.01.08",
            },
        ],
    },
];

const Wrapper = styled(Container)`
    .container {
        width: 100%;
        height: 70rem;
        position: sticky;
        top: 2rem;
        .box {
            width: 60rem;
            margin-top: 5rem;
            .title {
                ${flexCenter};
                justify-content: space-between;
                /* text-align: start; */
                font-weight: 700;
                font-size: 3rem;
                line-height: 4rem;
                .korean {
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 1.4rem;
            }
            }
            /* .korean {
                margin-top: 4rem;
                text-align: end;
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 2.2rem;
            } */
            .info {
                margin-top: 4rem;
                font-size: 1.6rem;
                line-height: 2.2rem;
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
    -webkit-text-stroke: 0.1rem ${theme.color.black};
    position: relative;
    ::after {
        content: "${({ title }) => `${title}`}";
        position: absolute;
        left: -0.4rem;
        top: -0.4rem;
        -webkit-text-stroke: 0.1rem ${theme.color.blue};
        opacity: 0.5;
    }
    ::before {
        content: "${({ title }) => `${title}`}";
        position: absolute;
        left: -0.4rem;
        top: -0.4rem;
        -webkit-text-stroke: 0.1rem ${theme.color.dark_green};
        opacity: 0.5;
    }
`;

const Activity = () => {
    return (
        <Wrapper>
            {activities.map((activity) => (
                <div className="container">
                    <div>
                        <Title title={activity.id}>{activity.id}</Title>
                        {activity.contents.map((content) => (
                            <div className="box">
                                <div className="title">
                                    <div>{content.title}</div>
                                    <div className="korean">{content.korean}</div>
                                </div>
                                {/* <div className="korean">{content.korean}</div> */}
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

export default Activity;