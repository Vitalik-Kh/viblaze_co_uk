import React from 'react';
import ReactDOM from 'react-dom';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
