import styled from "styled-components/macro";

interface Props {
    direction?: "row" | "column";
    gap?: number;
}

const Left = styled.div<Props>`
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: ${(props) => props.direction};
    gap: ${(props) => (props.gap !== undefined ? `${props.gap}px` : undefined)};
    width: 100%;
    height: 100%;
    left -10px;
`;

export default Left;
