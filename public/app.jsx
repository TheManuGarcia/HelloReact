var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');



//When we are returning JSX, we have to return only one root element, in this case <div>

var firstName = 'Manu';
var message = 'Winter is coming';

ReactDOM.render(
   //Passing our Greeter component using JSX. || Passing in a property (prop) into our Greeter call.
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);