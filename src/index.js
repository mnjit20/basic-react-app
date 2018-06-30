import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const content = 'Hello World';
const Message = props => <div>{props.children}</div>

const element = (<div className="container">
  <Message>Hello Worlld</Message>
  <Message>Worlld again</Message>
</div>);

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
