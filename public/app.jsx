var React = require('react');
var ReactDOM = require('react-dom');
 var Greeter = require('Greeter')


var firstName = 'Arkadiusz';
var firstMessage = 'Yeah this is from the component but the second message'
ReactDOM.render(
    <Greeter name={firstName} />,
    
    document.getElementById('app')    
);