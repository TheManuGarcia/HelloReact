var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');


//Common naming convention for react components (First letter is in Caps then camel case)
//A component shouldn't update its own props but it's allowed to update its own state

// CONTAINER COMPONENT
var Greeter  = React.createClass({

    //getDefaultProps is a method of React that returns an object of properties.

    //The props get defined

    getDefaultProps: function(){

        return {

            name: 'React',
            message: 'This is a message from the component'
        }
    },

    //React built-in function. || Maintain a name state that you can change

    //Sets its name state to the props value

    getInitialState: function (){
        return {
            name: this.props.name,
            message: this.props.message
        }
    },

    // SETS THE STATE OF GREETER
    handleNewData: function (updates){

        //Gets called when a user submits the form. || Updates the state and re-render the parts of the component
        this.setState(updates);
    },

    render: function(){

        //We access our name state to display on screen
        var name = this.state.name;

        //Access our prop to display || this.props.object stores all of our props.
        var message = this.state.message;


        return(
            <div>

                <GreeterMessage name ={name} message = {message}/>

                {/*Add new prop onNewName*/}
                <GreeterForm onNewData = {this.handleNewData}/>
            </div>
        );
    }

});

module.exports = Greeter;
