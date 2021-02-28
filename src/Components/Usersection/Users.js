import React from "react";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faEnvelopeOpenText,
	faPhone,
	faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
const Users = (props) => {
	// console.log(props);
	const name = props.user.name;
	const { title, first, last } = name;
	const fullName = `${title} ${first} ${last}`;
	const image = props.user.picture.large;
	const location = props.user.location;
	const { city, country } = location;
	const { email, phone } = props.user;
	const salary = Math.round(Math.random() * 100000);
	const Datasend = {
		name: fullName,
		image: image,
		location: city,
		country,
		email: email,
		phone: phone,
		salary: salary,
	};

	return (
		<div>
			<div className="card">
				<div className="imageandName">
					<img src={image} alt="" />
					<h2 id="name"> {fullName}</h2>
				</div>
				<div className="details">
					<div className="info">
						<div className="infoheader">
							<h4>
								<FontAwesomeIcon
									icon={
										faMapMarkerAlt
									}
								/>
								Location
							</h4>
						</div>
						<div className="infoText">
							<p>
								{city}, {country}
							</p>
						</div>
					</div>
					<div className="info">
						<div className="infoheader">
							<h4>
								<FontAwesomeIcon
									icon={
										faEnvelopeOpenText
									}
								/>
								Email
							</h4>
						</div>
						<div className="infoText">
							<p>{email}</p>
						</div>
					</div>
					<div className="info">
						<div className="infoheader">
							<h4>
								<FontAwesomeIcon
									icon={faPhone}
								/>
								Phone
							</h4>
						</div>
						<div className="infoText">
							{phone}
						</div>
					</div>
					<div className="info">
						<div className="infoheader">
							<h4>
								<FontAwesomeIcon
									icon={
										faDollarSign
									}
								/>
								Salary
							</h4>
						</div>
						<div className="infoText">
							<p>${salary}</p>
						</div>
					</div>
				</div>
				<footer>
					<button
						onClick={() => {
							props.addHandler(Datasend);
						}}
					>
						Add Me
					</button>
				</footer>
			</div>
		</div>
	);
};

export default Users;
