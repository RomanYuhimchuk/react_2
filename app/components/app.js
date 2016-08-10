var React = require('react');

var App = React.createClass({
	render: function(){
		let arr = this.props.usersObject,
				listStyle = {
					li : {
						display : "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						backgroundColor : this.props.number%2 === 0 ? "#ECF4F7" : "#98BFF0",
					},
					number: {
						width : "10%"
					},
					textBlocks: {
						width: "30%"
					},
					img : {
						background: "url(" + arr.img + ")",
						backgroundSize: "contain",
						backgroundPosition: "center center",
						width: 100,
						height: 100,
						display: "inline-block"
					}
				};
		return(
			<li style={listStyle.li}> 
				<div style={listStyle.number} >{this.props.number}</div>
				<div style={listStyle.textBlocks} ><div style={listStyle.img} ></div>{arr.username}</div>
				<div cstyle={listStyle.textBlocks} >{arr.recent}</div>
				<div style={listStyle.textBlocks} >{arr.alltime}</div>
			</li>
		);
	}
});

module.exports = App;