import './index.scss';
import { FC } from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}
declare const Button: FC<ButtonProps>;
export default Button;
