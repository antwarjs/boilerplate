React = require 'react'
_ = require 'lodash'

{ div, h1, p } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Index'

	render: ->
		div {className: 'post post--front'},
			h1 className: 'post__heading', 'Welcome home!'
			p 'This is the front page. You can do what you want with it.'
			p 'If you like JSX better you can just replace this with a file called Index.jsx. (Index.js will also work. Whatever floats your boat.)'



