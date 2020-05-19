import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../button';

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const onClickMock = jest.fn();
    const wrapper = render(<Button onClick={onClickMock}>Button</Button>);
    const element = wrapper.getByText('Button');
    expect(element).toBeInTheDocument();
    // expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('button');

    fireEvent.click(element);
    expect(onClickMock).toBeCalled();
  });

  it('should render the correct button based on different props', () => {
    const customClassName = 'custom-class-name';
    const prefixClassName = 'prefix';
    const wrapper = render(
      <Button
        text
        block
        prefixClassName={prefixClassName}
        className={customClassName}
        htmlType="submit"
      >
        Button
      </Button>
    );
    const element = wrapper.getByText('Button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(
      `${prefixClassName}-button`,
      `${prefixClassName}-button-text`,
      `${prefixClassName}-button-block`,
      customClassName
    );
    expect(element).toHaveAttribute('type', 'submit');
  });

  it('should render a link when href is provided', () => {
    const target = '_blank';
    const wrapper = render(
      <Button href="http://www.baidu.com" target={target}>
        Link
      </Button>
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveAttribute('target', target);
  });

  it('should render disabled button when disabled property set to true', () => {
    const onClickMock = jest.fn();
    const wrapper = render(
      <Button disabled onClick={onClickMock}>
        Button
      </Button>
    );
    const element = wrapper.getByText('Button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();

    fireEvent.click(element);
    expect(onClickMock).not.toBeCalled();
  });
});
