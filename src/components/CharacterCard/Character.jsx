import React from "react"
import "./styles.css"

function Character(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<div className="img-container">
					<img alt={props.name} src={props.image} />
			</div>
			<div className="content">
				<ul>
					<li>Date of Birth: {props.birth}</li>
					<li>Date of Death: {props.death}</li>
					<li>Race: {props.race}</li>
					<li>Realm:{props.realm}</li>
					<li>Spouse: {props.spouse}</li>
				</ul>
			</div>
		</div>
	)
}

export default Character