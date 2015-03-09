React = require 'react'
_ = require 'lodash'
{ div, p, h1 } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Page'

	render: ->
		div {className: 'post'},
			h1 className: 'post__heading', 'A page'
			p 'This is a page. You can have as many pages as you like. Just add another file to the `pages` folder.'
