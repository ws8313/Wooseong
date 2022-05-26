import styled from "styled-components";
import { Container, theme } from "../../styles/theme";

const links = [
    { id: "github", link: "https://github.com/ws8313"},
    { id: "resume", link: ""},
]

const infos = [
    { id: "Email", value: "kimwooseong8313@gmail.com" },
    { id: "Birth", value: "1995.07.14" },
    { id: "Residence", value: "Ulsan, South Korea" },
];

const Wrapper = styled(Container)`
    padding-top: 9rem;
    position: relative;
    .title {
        top: 0;
        font-size: 14.4rem;
        font-weight: 900;
        width: 100%;
        line-height: 17.6rem;
        letter-spacing: 0.12em;
        white-space: pre-line;
        &:nth-child(2) {
            text-align: end;
            -webkit-text-stroke: 0.1rem ${theme.color.gray7};
            color: transparent;
        }
    }
    .links {
        display: flex;
        margin-top: 8.9rem;
        gap: 2.6rem;
        padding-bottom: 1.4rem;
        /* position: relative; */
        .link {
            cursor: pointer;
            color: ${theme.color.gray7};
            font-weight: 300;
            font-size: 3rem;
            line-height: 3.5rem;
            border-bottom: 0.1rem solid transparent;
            &:hover {
                color: ${theme.color.black};
                border-bottom: 0.1rem solid ${theme.color.black};
            }
        }
    }
    .infos {
        margin-top: 5rem;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.2rem;
        div {
            margin-top: 1.4rem;
        }
        span {
            font-weight: 300;
            margin-left: 1rem;
        }
    }
`;

const Main = () => {
    return (
        <Wrapper>
            <div className="title">FRONTEND</div>
            <div className="title">{`KIM
            WOOSEONG`}</div>

            <div className="links">
                {links.map((link) => (
                    <div className="link" key={link.id}>
                        {link.id}
                    </div>
                ))}
            </div>

            <div className="infos">
                <div>Front-end Developer</div>
                {infos.map((info) => (
                    <div key={info.id}>
                        {info.id}.<span>{info.value}</span>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default Main;