var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var Index = React.createClass({
  getInitialState: function () {
    return { 
      players: {},
      players30: {},
      players100: {} };
  },

   componentDidMount: function() {
    this.serverRequest = $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function (result) {
      this.setState({
        players: result,
        players30: result
      });
    }.bind(this));

    this.serverRequest1 = $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function (result) {
      console.log("work");
      this.setState({
        players100: result,
      });
    }.bind(this));
  },
  recentFilter: function(){
    this.setState({
        players: this.state.players30
    });
  },
  allFilter: function(){
        this.setState({
        players: this.state.players100
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
    this.serverRequest1.abort();
  },

  render: function () {
    let arr = this.state.players,
        listStyle = {
          li : {
            display : "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor : "darkblue",
            color: "white"
          },
          number: {
            width : "10%"
          },
          textBlocks: {
            width: "30%"
          },
        };

    if (!Array.isArray(arr)){
      arr = [];
    }

  	return(	
  	<ul>
      <li style={listStyle.li}> 
        <div style={listStyle.number} >Position</div>
        <div style={listStyle.textBlocks} > Name </div>
        <div style={listStyle.textBlocks} onClick={this.recentFilter} >Recent</div>
        <div style={listStyle.textBlocks} onClick={this.allFilter} >Alltime</div>
      </li>
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