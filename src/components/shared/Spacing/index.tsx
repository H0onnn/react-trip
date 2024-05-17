import { Colors, colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface Props {
  size: number;
  direction?: "vertical" | "horizontal";
  backgroundColor?: Colors;
}

const Spacing = styled.div<Props>`
  ${({ size, direction = "vertical" }) =>
    direction === "vertical"
      ? `
        height: ${size}px;
    `
      : `
        width: ${size}px;`}

  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: ${colors[backgroundColor]};
  `}
`;

export default Spacing;
