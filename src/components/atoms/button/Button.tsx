import * as S from '@/components/atoms/button/Button.styles';
import { ButtonProps } from '@/components/atoms/button/Button.type';

/**
 * @param {Pick<ButtonProps,"size">} fontSize
 * @param {Pick<ButtonProps,"fontColor">} fontColor
 */

const Button = ({ fontSize, fontColor, children, disabled, onClick, ...rest }: ButtonProps) => {
  return (
    <S.TuiButton {...rest} fontSize={fontSize} fontColor={fontColor} disabled={disabled} onClick={onClick}>
      {children}
    </S.TuiButton>
  );
};

export default Button;
