import { useEffect, useState } from "react";
import "./App.css";
import Adduser from "./Components/Adduserpart/Adduser";
import Header from "./Components/Header/Header";
import Users from "./Components/Usersection/Users";
import usersdata from "./Fakedata/Users.json";
function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		setUsers(usersdata);
	}, []);

	// add handeler part:
	const [addfriends, setAddfriends] = useState([]);
	const addHandler = (dataReceive) => {
		const received = [...addfriends, dataReceive];
		setAddfriends(received);
	};

	return (
		<>
			<div className="headerP">
				<Header></Header>
			</div>
			<div className="bodyPart">
				<div className="Userssection">
					{users.map((user) => (
						<Users
							user={user}
							addHandler={addHandler}
						></Users>
					))}
				</div>
				<div className="AdduserSection">
					<Adduser addfriends={addfriends}></Adduser>
				</div>
			</div>
		</>
	);
}

export default App;
