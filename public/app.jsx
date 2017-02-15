//Common naming convention for react components (First letter is in Caps then camel case)
var Greeter  = React.createClass({
   render: function(){
       return(
           <div>
               <h1>Hello React!</h1>
               <p>This paragraph is from a component!</p>
           </div>
       );
   }


});

//When you are returning JSX, you have to return only one root element, in this case <div>

ReactDOM.render(
   //Passing our Greeter component using JSX
    <Greeter/>,
    document.getElementById('app')
);