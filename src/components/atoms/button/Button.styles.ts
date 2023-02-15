import { css } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '@/styles/colors';
import { ButtonProps } from '@/components/atoms/button/Button.type';
import Shadow from '@/styles/shadow';
import { flexCenterRow } from '@/styles/flex';

export const TuiButton = styled.button<Omit<ButtonProps, 'children'>>`
  width: auto;
  height: auto;
  cursor: pointer;
  border: none;
  border-radius: 0.313rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colors.brandColors.normal)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  color: ${({ fontColor }) => (fontColor ? fontColor : colors.textColors.white)};
  margin: ${({ margin }) => margin && margin};
  transition: all 0.35s ease;
  ${flexCenterRow}

  ${props => {
    switch (props.size) {
      case 'sm':
        return css`
          padding: 10px;
        `;
      case 'md':
        return css`
          padding: 12px 30px;
        `;
      case 'lg':
        return css`
          padding: 80px;
        `;
      case 'singleIcon':
        return css`
          padding: 12px 12px;
        `;
      default:
        return css`
          padding: 12px 30px;
        `;
    }
  }}

  ${props => {
    switch (props.variant) {
      case 'header_btn_style_01':
        return css`
          color: ${colors.textColors.white};
          background-color: ${colors.brandColors.normal};

          &:hover {
            box-shadow: ${Shadow.shadow_01};
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'header_btn_style_02':
        return css`
          color: ${colors.brandColors.normal};
          background-color: ${colors.backgroundColors.white};
          border: 1px solid ${colors.grayscaleColors.gray_02};

          &:hover {
            box-shadow: ${Shadow.shadow_01};
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'square_button_style_01':
        return css`
          color: ${colors.textColors.white};
          background-color: ${colors.brandColors.normal};

          &:hover {
            color: ${colors.brandColors.normal};
            background-color: ${colors.textColors.white};
            box-shadow: 0 0 0 1px ${colors.brandColors.normal} inset;
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'square_button_style_02':
        return css`
          color: ${colors.textColors.white};
          background-color: ${colors.grayscaleColors.gray_03};

          &:hover {
            color: ${colors.textColors.white};
            background-color: ${colors.grayscaleColors.gray_05};
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'square_button_style_03':
        return css`
          color: ${colors.brandColors.normal};
          background-color: ${colors.backgroundColors.white};

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'round_button_style_01':
        return css`
          color: ${colors.textColors.white};
          background-color: ${colors.brandColors.normal};
          border-radius: 25px;
          &:hover {
            color: ${colors.brandColors.normal};
            background-color: ${colors.backgroundColors.white};
            box-shadow: 0 0 0 1px ${colors.brandColors.normal} inset;
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'round_button_style_02':
        return css`
          color: ${colors.brandColors.normal};
          background-color: ${colors.backgroundColors.white};
          box-shadow: 0 0 0 1px ${colors.brandColors.normal} inset;
          border-radius: 25px;
          &:hover {
            color: ${colors.textColors.white};
            background-color: ${colors.brandColors.normal};
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'icon_button_style_01':
        return css`
          background-color: transparent;
          box-shadow: 0 0 0 2px ${colors.grayscaleColors.gray_05} inset;
          padding: 12px;

          & svg {
            transition: all 0.35s ease;
            fill: ${colors.grayscaleColors.gray_05};
          }

          &:hover {
            background-color: ${colors.backgroundColors.white};
            box-shadow: 0 0 0 2px ${colors.brandColors.normal} inset;

            & > svg {
              fill: ${colors.brandColors.normal};
            }
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
      case 'icon_button_style_02':
        return css`
          color: ${colors.textColors.white};
          background-color: ${colors.brandColors.normal};
          box-shadow: 0 0 0 1px ${colors.grayscaleColors.gray_05} inset;
          padding: 12px;

          & svg {
            fill: ${colors.textColors.white};
          }

          &:disabled {
            ${disabledStyle}
          }
        `;
    }
  }}
`;

export const disabledStyle = css`
  &:disabled {
    cursor: not-allowed;
    color: ${colors.textColors.white};
    background-color: ${colors.grayscaleColors.gray_02};
    border: unset;
    box-shadow: unset;

    & > svg {
      fill: ${colors.textColors.white} !important;
    }

    &:hover {
      box-shadow: unset;
    }
  }
`;
