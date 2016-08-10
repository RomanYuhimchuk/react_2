var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var Index = React.createClass({
  getInitialState: function () {
    return { players: {} };
  },

   componentDidMount: function() {
    this.serverRequest = $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function (result) {
      this.setState({
        players: result,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function () {
    var arr = this.state.players;
  	console.log(this.state.players);
   
    if (!Array.isArray(arr)){
      arr = [];
    }

  	return(	
  	<ul>
      {
         arr.map((el,i)=>{
             return <App usersObject = {el} key={i+1} number={i+1} />  
         }) 
      
      }
  	</ul>
  	);
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);