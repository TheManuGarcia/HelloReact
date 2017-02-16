//Creating Form and Message component

var GreeterMessage = React.createClass({
   render: function () {
       return (
         <div>
             <h1>Some H1</h1>
             <p>Some paragraph</p>
         </div>
       );

   }
});

var GreeterForm = React.createClass({
   render: function (){
       return (
           <form>
               <input type='text' ref='name'/>
               <button>Set Name</button>
           </form>
       );
   }
});

//Common naming convention for react components (First letter is in Caps then camel case)
//A component shouldn't update its own props but it's allowed to update its own state

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

    onButtonClick: function (event){
        event.preventDefault(); // Prevents page from reloading

        var nameRef = this.refs.name;

        var name = nameRef.value; // Fetches the name value that has been input in our form by getting the ref of the input field.

        //Clears out the input field
        nameRef.value = '';

        if(typeof name === 'string' && name.length > 0) {
            //Gets called when a user submits the form. || Updates the state and re-render the parts of the component
            this.setState({
                name: name
            });
        }
    },

   render: function(){

       //We access our name state to display on screen
       var name = this.state.name;

       //Access our prop to display || this.props.object stores all of our props.
       var message = this.props.message;


       return(
           <div>
               <h1>Hello {name}!</h1>
               <p>{message}!</p>

               <GreeterMessage/>

               <form onSubmit={this.onButtonClick}>
                   <input type='text' ref='name'/>
                   <button>Set Name</button>
               </form>

               <GreeterForm/>
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