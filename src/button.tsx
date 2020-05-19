import React from 'react';
import { Omit, omit, classNames, concat } from '@react-component-contrib/util';

export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export type AnchorButtonProps = {
  href?: string;
  target?: string;
} & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
} & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export interface IBaseButtonProps {
  prefixClassName?: string;
  disabled?: boolean;
  block?: boolean;
  text?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type ButtonProps = Partial<IBaseButtonProps & AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = ({
  prefixClassName,
  block,
  text,
  htmlType,
  children,
  className,
  ...rest
}) => {
  const buttonClassName = concat(prefixClassName, 'button');
  const buttonClassNames = classNames(
    buttonClassName,
    {
      [concat(buttonClassName, 'block')]: block,
      [concat(buttonClassName, 'text')]: text,
    },
    className
  );
  if (rest.href !== undefined) {
    return (
      <a {...omit(rest, ['htmlType'])} className={buttonClassNames}>
        {children}
      </a>
    );
  }
  return (
    <button {...omit(rest, ['href', 'target'])} className={buttonClassNames} type={htmlType}>
      {children}
    </button>
  );
};

export default Button;
