import React from 'react';
import './card-style.css';
export const Card = (props) => (
	<div className="card-container">
		<img alt={props.users.id} src={`https://robohash.org/${props.users.id}?set=set3&size=180x180`}/>
		<h1>{props.users.name}</h1>
		<h3>{props.users.email}</h3>
	</div>
);
