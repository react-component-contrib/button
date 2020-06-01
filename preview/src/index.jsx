import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'lib';

import './index.less';

function App() {
  return (
    <>
      <Button disabled>Button</Button>
      <Button disabled href="https://www.baidu.com">Button</Button>
      <Button text>Text</Button>

      <div>
        <Button block>Block</Button>
        <Button block text>Block Text</Button>
      </div>

      <Button.Group prefixClassName="noob">
        <Button disabled text>1</Button>
        111
        <div>222</div>
        <Button>2</Button>
      </Button.Group>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
