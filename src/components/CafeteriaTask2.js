import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container, Alert } from "reactstrap";

import Navigation from "./Navigation";
import Notification from "./Notification";

import { CupHot } from 'react-bootstrap-icons';

const CafeteriaTask2 = () => {
	const navigation = useNavigate();
	const modalRef = useRef();

	const dishes = [
		{
			id: 0,
			name: "Dagens",
			price: 53.9,
		},
		{
			id: 1,
			name: "Vegetar",
			price: 42.5,
		},
		{
			id: 2,
			name: "Halal",
			price: 59.9,
		}
	];
	
	const smallTalk = [
		{
			id: 0,
			txt: "how is business?",
		},
		{
			id: 1,
			txt: "not hungry",
		}
	];
		
	const fredrikke = "What would you like today? (chose 'how is business?' to attempt small talk, or 'not hungry' to stop)";
		
	const [sum, setSum] = useState(0);
	const [totalSum, setTotalSum] = useState(0);
	const [feedback, setFeedback] = useState("Fredrikkes feedback...");
	
	useEffect(() => {	
	
		return () => {
			
		};
	
	}, []);
	
	const hideNotification = () => {
		let overlay = modalRef.current;
		overlay.hide();
	}
	
	const showNotification = (title, msg, spinner, buttons) => {
		let overlay = modalRef.current;

		overlay.title(title);
		overlay.spinner(spinner);
		overlay.content(msg);
		overlay.buttons(buttons);
		
		overlay.show();
	}	
	
	const redirect = () => {
		console.log("bye bye");
		navigation("/",{ state:{}});
	}
	
	const createColumns = (columns, type, onclickFn) => {
		let myColumns = [];
		
		for (var i=0;i<columns.length;i++) {
			let column = columns[i];
			let columKey = "column_" + type + "_" + i ;


			let oneColumn = <div key={columKey} className="col-xl-6 col-md-6 mb-6"><div className="column_wrapper" onClick={() => onclickFn(column.id)}><div className="icon_container"><CupHot className="icon"/></div><div className="column_txt">{column.price ? column.name + " " + column.price : column.txt}</div></div></div>
			
			myColumns.push(oneColumn);
		}

		return myColumns;
	}
	
	const buyDish = (id) => {
		console.log("buying dish: " + id);

		setTotalSum((parseFloat(totalSum) + parseFloat(dishes[id].price)).toFixed(1));
		
		if (parseFloat(sum) + parseFloat(dishes[id].price)>200) {
			showNotification("Notification", "Cash registry emptied. Thieves be warned!", false, [{caption: "Okay", onClick: hideNotification}]);
			setSum(0);
		} else {
			setSum((parseFloat(sum) + parseFloat(dishes[id].price)).toFixed(1));
		}
		
		setFeedback(dishes[id].name + " here you go!");
		
	}
	
	const doSmallTalk = (id) => {
		console.log("do smalltalk: " + id);
		
		if (id === 1) {
			showNotification("Notification", "Welcome back later!", false, [{caption: "Okay", onClick: redirect}]);
			return;
		}
			
		
		if (totalSum === 0) {
			setFeedback("Not good so far. No one seems to be hungry today!");
		} else if (totalSum > 500) {
			setFeedback("Excellent! Lots of hungry students around today.");
        } else if (totalSum > 0) {
			setFeedback("Alright. Could have been better");
		}

	}

	let smallTalkOptions = createColumns(smallTalk, "smalltalk", doSmallTalk);
	
	let dishOptions = createColumns(dishes, "dishes", buyDish);
			
	return (
	<>
	
	<Notification ref={modalRef} />
	
	<Navigation />
	
	<main className="my-5 py-5">

		<Container className="px-0">
		</Container>
			
		<div id="wrapper">

			<div id="content-wrapper" className="d-flex flex-column">

				<div id="content">

					<div className="container-fluid">
					
						<div className="row">
							<h1 className="txt_center">Cafeteria Stats: Sum in Register {sum}, Total Sum: {totalSum}</h1>
						</div>
				
						<div className="row p_20 txt_center">
				
							<div>
								<Alert color="info">
									{fredrikke}
								</Alert>
							</div>
				
							{smallTalkOptions}
							
							<div id="" className="margin_t_20">
								<Alert color="primary">
									{feedback}
								</Alert>
							</div>
				
							{dishOptions}
				
						</div>
					
					</div>
					
				</div>
				
			</div>
		
		</div>

	</main>
	</>
	);
};

export default CafeteriaTask2;