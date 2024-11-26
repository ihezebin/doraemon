import React, { ComponentProps } from 'react';
import './index.scss';

interface ButtonProps extends ComponentProps<any> {
    /**
     * @default middle
     */
    size?: 'small' | 'middle' | 'large';
    disabled?: boolean;
}
export declare const ExitButton: ({ size, className, disabled, ...props }: ButtonProps) => React.JSX.Element;
export declare const FullscreenButton: ({ size, className, disabled, ...props }: ButtonProps) => React.JSX.Element;
export declare const FullscreenExitButton: ({ size, className, disabled, ...props }: ButtonProps) => React.JSX.Element;
export declare const MinimizedButton: ({ size, className, disabled, ...props }: ButtonProps) => React.JSX.Element;
export {};
