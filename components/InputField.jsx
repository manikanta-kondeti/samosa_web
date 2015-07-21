/** @jsx React.DOM */

'use strict'

var React = require('react')

module.exports = React.createClass({

  getInitialState: function() {
    return {focus_flag: false};
  },

  Focus: function() {
    this.setState({focus_flag: !this.state.focus_flag});
  },

	render: function() {

		var inputStyle = {
			width: '100%',
			height: '100%',
			lineHeight: '45px',
			paddingLeft: '10px',
			color: '#999',
			border: '1px solid #dcdcdc',
			fontFamily: 'Helvetica,Arial',
			fontSize: '16px',
			margin: '5px',
			boxShadow: '1px 1px 7px #dcdcdc'
		};

		if (this.state.focus_flag) {

		   inputStyle['outline'] = 'none';
		   inputStyle["border"] = '1px solid #d43f3a';
     	}


		return (

			<input onFocus = {this.Focus} onBlur = {this.Focus}  name={this.props.name} ref={this.props.ref} placeholder={this.props.placeholder} style = {inputStyle}/>
		)
	}

});