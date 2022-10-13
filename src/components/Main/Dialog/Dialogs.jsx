import React from "react";
import './Dialogs.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div>
			{props.message}
		</div>
	)
}

let dialogs = [
	{ id: 1, name: 'alex ' },
	{ id: 2, name: 'alex2 ' },
	{ id: 3, name: 'alex3 ' },
	{ id: 4, name: 'alex4 ' },
	{ id: 5, name: 'alex5 ' },
	{ id: 6, name: 'alex6 ' },
]

let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>)

const Dialogs = () => {
	return (
		<div className="dialogs">
			<div className="dialogs-items">
				<DialogItem name="Alex" id="01"></DialogItem>
				<DialogItem name="user1" id="02"></DialogItem>
				<DialogItem name="user2" id="03"></DialogItem>
			</div>
			<div className="dialogs-window">
				<Message message="Hello"></Message>
				<Message message="привет"></Message>
				<Message message="здоровенько"></Message>
			</div>
		</div>
	)
}

export default Dialogs;