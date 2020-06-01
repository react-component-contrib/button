# @react-component-contrib/button

React component button


## 📦 Installation

You must be React 16.8 or higher.

To use `@react-component-contrib/button` with your React app:

```bash
npm install --save @react-component-contrib/button
```


## 🔨 Usage

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@react-component-contrib/button';

/**
 * By default, the component has no style.
 * Consider importing the stylesheet it comes with:
 *
 * import '@react-component-contrib/button/lib/index.css';
 *
 * If you use Less, you can import less files:
 *
 * import '@react-component-contrib/button/lib/index.less';
 */

function App() {
  return (
    <Button>Button</Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```


## 📝 API Reference

### Button

| Property | Description | Type | Default |
| -------- | ----------- | :--: | :-----: |
| prefixClassName | set prefix class | `string` | - |
| disabled | disabled state of button	 | `boolean` | `false` |
| htmlType | set the original html type of button, see: [HTML standard](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | `string` | `button` |
| href | redirect url of link button | `string` | - |
| target | same as target attribute of a, works when href is specified | `string` | - |
| block | option to fit button width to its parent width | `boolean` | `false` |
| text | set text button | `boolean` | `false` |
| onClick | set the handler to handle click event | `(event) => void` | - |

It accepts all props which native buttons support.

### ButtonGroup

| Property | Description | Type | Default |
| -------- | ----------- | :--: | :-----: |
| prefixClassName | set prefix class, the button class of the group will also change | `string` | - |


## 🐛 Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/react-component-contrib/button/issues).


## 🏁 Changelog

Changes are tracked in the [CHANGELOG.md](https://github.com/react-component-contrib/button/blob/master/CHANGELOG.md).


## 📄 License

The component is available under the [MIT](https://github.com/react-component-contrib/button/blob/master/LICENSE) License.
