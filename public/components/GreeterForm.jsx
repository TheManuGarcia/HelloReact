var React = require('react');
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

module.exports = GreeterForm;