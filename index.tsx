import * as React from 'react';
import * as ReactDOM from 'react-dom'

// Render a simple React h1 component into the body.
let element = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(element);
ReactDOM.render(<h1>Hello, TypeScript!</h1>, element);
