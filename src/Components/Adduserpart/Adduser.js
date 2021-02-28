import React from "react";
import "./Adduser.css";
import image from "./../../Images/logo1.png";

const Adduser = (props) => {
	console.log(props.addfriends);
	const addfriendsData = props.addfriends;
	const friendsLength = addfriendsData.length;
	const totalSalary = addfriendsData.reduce(function (
		previousValue,
		currentValue
	) {
		return previousValue + currentValue.salary;
	},
	0);
	console.log(totalSalary);
	return (
		<div>
			<div className="friendscard">
				<div className="header">
					<img src={image} alt="" />
				</div>
				<div className="fullData">
					<table>
						<tr>
							<td>
								<h3> Your Friends:</h3>
							</td>
							<td>
								<h3>{friendsLength}</h3>
							</td>
						</tr>
						<tr>
							<td>
								<h3>
									<h3>
										Total
										Salary
									</h3>
								</h3>
							</td>
							<td>
								<h3>${totalSalary}</h3>
							</td>
						</tr>
						<tr>
							<td>
								<h3>
									Total 20%
									savings:
								</h3>
							</td>
							<td>
								<h3>
									$
									{Math.round(
										totalSalary *
											0.2
									)}
								</h3>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Adduser;
