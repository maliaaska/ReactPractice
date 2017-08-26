var React = require('react');
var GreeterMessage = require('./GreeterMessage'); 
var GreeterForm = require ('./GreeterForm');


var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React",
            message: " default message"
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewData: function (updates){
        this.setState(updates);
    },

    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
})

//by setting up module.exports = greeter 
//anybody who requires this file is gonna get an access
// to this function
module.exports = Greeter;