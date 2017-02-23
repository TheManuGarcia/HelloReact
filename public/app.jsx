var React = require('react');
var ReactDOM = require('react-dom');

//Creating Form and Message component


// PRESENTATIONAL COMPONENT

var GreeterForm = React.createClass({

   onFormSubmit: function(e){

       // VALIDATES DATA
       e.preventDefault();


       var updates = {};

       // Pull the value out of our form
       var name = this.refs.name.value;
       var message = this.refs.message.value;

     // Prints name and clears the form
     if (name.length > 0){
         this.refs.name.value = '';
         updates.name = name;
         // CALLS A FUNCTION THAT'S PASSED IN FROM THE PARENT
     }

     if(message.length>0) {
         this.refs.message.value='';
         updates.message=message;
     }

       this.props.onNewData(updates);
   },
    render: function (){
       return (
           <form onSubmit={this.onFormSubmit}>
               <div>
                    <input type='text' ref='name' placeholder="Enter name"/>
               </div>
               <div>
                    <textarea rows="2" ref='message' placeholder="Enter message"/>
               </div>
               <div>
                    <button>Submit</button>
               </div>
           </form>
       );
   }
});

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

//When we are returning JSX, we have to return only one root element, in this case <div>

var firstName = 'Manu';
var message = 'Winter is coming';

ReactDOM.render(
   //Passing our Greeter component using JSX. || Passing in a property (prop) into our Greeter call.
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);