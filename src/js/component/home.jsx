import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState (null);

	return (
	<div className="text-center p-5 ">
	
		<div className="red"><button style={{fontSize: "5rem", backgroundColor: selected === "red" ? "red" : null}}
		onClick={()=> { setSelected(selected === "red" ? null : "red");}}> 🔴 </button></div>
		<div className="orange"><button style={{fontSize: "5rem", backgroundColor: selected === "orange" ? "orange" : null}}
		onClick={()=> {
			setSelected (selected === "orange" ? null : "orange");
		}}>🟠</button></div>
		<div className="green"><button style={{fontSize: "5rem", backgroundColor: selected === "green" ? "green" : null}}
		onClick={()=> {
			setSelected (selected === "green" ? null : "green");
		}}>🟢</button></div>
	</div>
	);
};

export default Home;
