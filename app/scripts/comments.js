"use strict";

var Comment = React.createClass({
	displayName: "Comment",

	render: function render() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			React.createElement("span", { dangerouslySetInnerHTML: { __html: rawMarkup } })
		);
	}
});

var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentList" },
			React.createElement(
				Comment,
				{ author: "Peter Hunt" },
				"This is one comment"
			),
			React.createElement(
				Comment,
				{ author: "Jordan Walke" },
				"This is *another* comment"
			)
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentForm" },
			"Hello, world! I am a CommentForm."
		);
	}
});

var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, null),
			React.createElement(CommentForm, null)
		);
	}
});

React.render(React.createElement(CommentBox, null), document.getElementById("content"));
