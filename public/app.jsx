
var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;


        return (
            <div>
                <h1>Hello {name}! </h1>
                <p>Some {message}!</p>
        </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();


        var name = this.refs.name.value;
        var message = this.refs.message.value
        if (name.length > 0 && message.length > 0) {
            this.refs.name.value = ''; 
            this.props.onNewName(name); 
            this.refs.message.value ='';
            this.props.onNewMessage(message);
        } else if(name.length > 0) {
            this.refs.name.value = ''; 
            this.props.onNewName(name);   
        } else if (message.length > 0) {
            this.refs.message.value ='';
            this.props.onNewMessage(message);
        } else  {
            return
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/><br/>
                <textarea type="text" ref="message"/><br/>
                <button>Submit</button>
            </form>

        );
    }
})

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
    handleNewName: function (name){
        this.setState({
            name: name,
        });
    },
    handleNewMessage: function (message) {
        this.setState({
            message: message
        });
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
            </div>
        );
    }
})

var firstName = 'Arkadiusz';
var firstMessage = 'Yeah this is from the component but the second message'
ReactDOM.render(
    <Greeter name={firstName} />,
    
    document.getElementById('app')    
);