import { css } from "styled-components"

// 믹스인 변경
export const flexMixin = ({
    direction = 'row',
    justify = 'start',
    align = 'stretch',
    gap = 0,
    wrap = 'nowrap'
}) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
    `

export const fontMixin = ({size , weight = '400'}) =>
    css`
        font-size : ${size};
        font-weight : ${weight};
    `

/* 변수 변경 */
export const tagcolor = '#d7fa00';
export const gray = 'rgb(160, 160, 160)';