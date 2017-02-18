//Creating Form and Message component

// PRESENTATIONAL COMPONENT
var GreeterMessage = React.createClass({
   render: function () {
       var name = this.props.name;
       var message = this.props.message;
       return (
         <div>
             <h1>Hello {name} !</h1>
             <p>{message}</p>
         </div>
       );

   }
});
// PRESENTATIONAL COMPONENT

var GreeterForm = React.createClass({

   onFormSubmit: function(e){

       // VALIDATES DATA
       e.preventDefault();
     // Pull the value out of our form
     var name = this.refs.name.value;

     // Prints name and clears the form
     if (name.length > 0){
         this.refs.name.value = '';

         // CALLS A FUNCTION THAT'S PASSED IN FROM THE PARENT
         this.props.onNewName(name);

     }
   },
    render: function (){
       return (
           <form onSubmit={this.onFormSubmit}>
               <input type='text' ref='name'/>
               <button>Set Name</button>
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
            name: this.props.name
        }
    },

    // SETS THE STATE OF GREETER
    handleNewName: function (name){

            //Gets called when a user submits the form. || Updates the state and re-render the parts of the component
            this.setState({
                name: name
            });
        },

   render: function(){

       //We access our name state to display on screen
       var name = this.state.name;

       //Access our prop to display || this.props.object stores all of our props.
       var message = this.props.message;


       return(
           <div>

               <GreeterMessage name ={name} message = {message}/>

               {/*Add new prop onNewName*/}
               <GreeterForm onNewName = {this.handleNewName}/>
           </div>
       );
   }

});

//When you are returning JSX, you have to return only one root element, in this case <div>

var firstName = 'Manu';
var message = 'Winter is coming';

ReactDOM.render(
   //Passing our Greeter component using JSX. || Passing in a property (prop) into our Greeter call.
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);