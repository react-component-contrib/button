import * as React from 'react';
import { concat, classNames, isObject } from '@react-component-contrib/util';
import Button from './button';

export interface IButtonGroupProps extends React.ComponentProps<'div'> {
  prefixClassName?: string;
}

const ButtonGroup: React.FC<IButtonGroupProps> = props => {
  const {prefixClassName, children, className, ...restProps} = props;
  const buttonGroupClassNames = classNames(
    concat(prefixClassName, 'button-group'),
    className,
  );
  const newChildren = React.Children.map(children, (child: React.ReactElement) => {
    if (!child || !isObject(child)) {
      return child;
    }
    if (child.type === Button && !child.props.prefixClassName) {
      return React.cloneElement(child, {
        prefixClassName,
      });
    }
    return child;
  });
  return <div className={buttonGroupClassNames} {...restProps}>{newChildren}</div>;
};

export default ButtonGroup;
