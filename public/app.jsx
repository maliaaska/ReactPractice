
var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1> Some H1</h1>
                <p>Some paragraph</p>
        </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>

        );
    }
})

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React",
            message: "This is from the component"
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function (e){

        //This event prevents refreshing page
        e.preventDefault();
        
        var nameRef = this.refs.name;
        var name = nameRef.value

        //make a input field always empty
        nameRef.value = "";

        // doesn't let to click event remove a name when a imput field is empty!
        if (typeof name === 'string' && name.length > 0) {

            this.setState({
                name: name
            })
    
        }
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                <GreeterMessage/>


                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
                <GreeterForm/>
            </div>
        );
    }
})

var firstName = 'Arkadiusz';
var firstMessage = 'Yeah this is from the component but the second message'
ReactDOM.render(
    <Greeter name={firstName} message={firstMessage} />,
    
    document.getElementById('app')    
);