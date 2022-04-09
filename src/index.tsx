import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css/sanitize.css';

import { App } from './app';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(<App />, MOUNT_NODE);
