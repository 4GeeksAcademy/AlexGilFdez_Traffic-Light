import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="text-center p-5 ">
			<div
				style={{
					display: "inline-block",
					backgroundColor: "black",
					padding: "10px",
					borderRadius: "10px",
					position: "relative",
				}}
			>
				<div
					style={{
						width: "10px",
						height: "100px",
						backgroundColor: "black",
						position: "absolute",
						top: "-95px",
						left: "50%",
						transform: "translateX(-50%)",

					}}
				></div>

				<div className="red" >
					<button
						style={{
							backgroundColor: "black",
							border: "none",
							padding: "10px",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						onClick={() => setSelected(selected === "red" ? null : "red")}
					>
						<span
							style={{
								fontSize: "5rem",
								boxShadow: selected === "red" ? "0 0 30px 10px red" : "",
								borderRadius: "50%",
								transition: "box-shadow 0.3s ease",
								lineHeight: "1",
							}}
						>🔴</span></button></div>

				<div className="orange" >
					<button
						style={{
							backgroundColor: "black",
							border: "none",
							padding: "10px",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						onClick={() => setSelected(selected === "orange" ? null : "orange")}
					>
						<span
							style={{
								fontSize: "5rem",
								boxShadow: selected === "orange" ? "0 0 30px 10px orange" : "",
								borderRadius: "50%",
								transition: "box-shadow 0.3s ease",
								lineHeight: "1",
							}}
						>🟠</span></button></div>

				<div className="green" >
					<button
						style={{
							backgroundColor: "black",
							border: "none",
							padding: "10px",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						onClick={() => setSelected(selected === "green" ? null : "green")}
					>
						<span
							style={{
								fontSize: "5rem",
								boxShadow: selected === "green" ? "0 0 30px 10px green" : "",
								borderRadius: "50%",
								transition: "box-shadow 0.3s ease",
								lineHeight: "1",
							}}
						>🟢</span></button></div>
			</div>
		</div>
	);
};

export default Home;
