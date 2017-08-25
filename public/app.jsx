
var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React",
            message: "This is from the component"
        }
    },

    onButtonClick: function (e){

        //This event prevents refreshing page
        e.preventDefault();
        
        var name = this.refs.name.value;

        alert(name);

    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>


                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
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