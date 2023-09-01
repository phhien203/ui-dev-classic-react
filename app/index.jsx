import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import './index.css'

class App extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);
