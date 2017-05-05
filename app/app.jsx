const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('Main');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load Css
require('style-loader!css-loader!sass-loader!ApplicationStyles');



ReactDOM.render(
    <Main />,
    document.getElementById('app')
);