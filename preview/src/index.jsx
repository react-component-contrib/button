import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'lib';

import './index.less';

function App() {
  return <Button>Test</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
