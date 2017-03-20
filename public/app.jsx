//React component renders only one root parameter. In this case the <div> tag.
// It accepts only one <div>. Adding more than one <div> tags can not render the program.

// GreetingMessage component
var GreetingMessage = React.createClass({
  render: function(){
    var name = this.props.name;
      return(
        <div>
          <h1>Hello {name}!</h1>
          <p>This is Paragraph.</p>
       </div>
      );
  }
});

// Greeting Form component
var GreetingForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var name = this.refs.name.value;

        if(name.length > 0){
          this.refs.name.value = '';
          this.props.onNewName(name);
        }
    },

    render: function(){
        return(
            <form onSubmit = {this.onFormSubmit}>
              <input type = "text" ref = "name"/>
              <button>Click Me</button>
            </form>
        );
    }
});


// Greeting component- the
var Greeting = React.createClass({
    getDefaultProps: function(){
      return {
        name: 'Sagar',
        message: 'React message is not passed'
      };
    },

    getInitialState: function(){
      return{
        name: this.props.name
      };
    },

    handleNewName: function(name){
      this.setState({
          name: name
      })
    },

    render: function(){
        var name = this.state.name;
        var message = this.props.message;
        return(
          <div>
            <GreetingMessage name = {name}/>
            <GreetingForm onNewName = {this.handleNewName}/>
          </div>
        );
      }
});

var name = 'React';
var message = 'A message from React';
ReactDOM.render(
  <Greeting name = {name} />,   //message={message}
  document.getElementById('app')
);

// User events and callbacks.
