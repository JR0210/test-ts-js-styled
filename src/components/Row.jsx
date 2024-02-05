// @ts-nocheck
import { color, space, width, layout } from "styled-system";
import styled, { css } from "styled-components";

import PropTypes from "prop-types";
import theme from "../../../themes/default";

const gutter = (props) => {
  if (props.gutter) {
    return css`
      > :nth-child(1n + 2) {
        margin: 0px ${(props) => props.theme.space[props.gutter]}px 0px
          ${(props) => props.theme.space[props.gutter]}px;
      }
      > :last-child {
        margin: 0px 0px 0px ${(props) => props.theme.space[props.gutter]}px;
      }
      > :first-child {
        margin: 0px ${(props) => props.theme.space[props.gutter]}px 0px 0px;
      }
    `;
  }
};

const StyledRow = styled.div`
  ${layout}
  ${space}
    ${width}
    ${color}

    display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.align};
  align-items: ${(props) => props.items};
  flex-wrap: ${(props) => props.wrap};
  flex-grow: ${(props) => props.grow};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};

  ${(props) => gutter(props)}
`;

StyledRow.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  align: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-evenly",
    "space-around",
    "stretch",
  ]),
  items: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-evenly",
    "space-around",
    "stretch",
  ]),
  /**
   * Determines space between each element/component within the Row by setting the child elements/components left and right margins. Allows more control over children spacing compared to flex align as it uses the defined spacing object in theme.
   */
  gutter: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

StyledRow.defaultProps = {
  height: "auto",
  align: "flex-start",
  items: "center",
  width: "1",
  gutter: 0,
  theme,
};

export default StyledRow;
