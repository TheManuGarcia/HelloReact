//Common naming convention for react components (First letter is in Caps then camel case)
var Greeter  = React.createClass({

    //getDefaultProps is a method of React that returns an object of properties

    getDefaultProps: function(){

        return {

            name: 'React',
            message: 'This is a message from the component'
      }
    },
   render: function(){

       //Access our prop to display || this.props.object stores all of our props.
       var name = this.props.name;
       var message = this.props.message;


       return(
           <div>
               <h1>Hello {name}!</h1>
               <p>{message}!</p>
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