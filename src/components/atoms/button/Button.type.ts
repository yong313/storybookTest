import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
  fontColor?: string;
  fontSize?: string;
  margin?: string;
  disabled?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'singleIcon';
  variant?:
    | 'header_btn_style_01'
    | 'header_btn_style_02'
    | 'square_button_style_01'
    | 'square_button_style_02'
    | 'square_button_style_03'
    | 'round_button_style_01'
    | 'round_button_style_02'
    | 'icon_button_style_01'
    | 'icon_button_style_02';
}
