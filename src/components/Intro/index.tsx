import { useEffect } from "react";
import styled from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const Intro = () => {
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector("#intro")!;
            const divs = element.querySelectorAll("div");

            window.scrollY > 100
                ? divs.forEach((div, i) => {
                    div.classList.add("animation");
                    div.style.animationDelay = `${i}s`;
                })
                : divs.forEach((div) => div.classList.remove("animation"));
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Wrapper id="intro">
            <div>{`안녕하세요. 프론트엔드 개발자를 꿈꾸는 김우성입니다.
            기본부터 탄탄히 다져나가고자 매일 기록하고 회고하고 있습니다.`}</div>

            <div>{`"처음 시작할 때의 마음가짐과 목표를 잊지 말자."`}</div>

            <div>{`스스로에게 "이게 최선인가?" 라는 질문을 던지며
            계속해서 발전해 나가는 모습을 기록하고자 합니다.`}</div>

        </Wrapper>
    );
};

const Wrapper = styled(Container)`
    ${flexCenter};
    flex-direction: column;
    text-align: center;
    padding-top: 21rem;
    padding-bottom: 21rem;
    white-space: pre-line;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 4rem;
    gap: 30rem;
    & > div {
        width: 90rem;
        opacity: 0;
        &:nth-child(2) {
            font-weight: 600;
        }
    }
    .animation {
        opacity: 1;
        transition: 2s;
        margin-top: -10rem;
    }
`;

export default Intro;