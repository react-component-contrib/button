import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';
import ButtonGroup from '../button-group';

describe('test Button Group component', () => {
  it('should render button with prefix class when prefixClassName property sets the string', () => {
    const prefixClassName = 'prefix';
    const wrapper = render(
      <ButtonGroup data-testid="group" prefixClassName={prefixClassName}>
        <Button text>Button1</Button>
        <Button text>Button2</Button>
      </ButtonGroup>
    );
    const element = wrapper.getByTestId('group');
    Array.from(element.children).forEach(child => expect(child).toHaveClass(
      `${prefixClassName}-button`,
      `${prefixClassName}-button-text`,
    ));
  });
});
