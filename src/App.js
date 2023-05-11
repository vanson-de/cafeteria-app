import { Container, Alert } from "reactstrap";

import Navigation from "./components/Navigation";

import { CupHot } from 'react-bootstrap-icons';
import { CupHotFill } from 'react-bootstrap-icons';

const App = () => (
	<>
	
	<Navigation />
	
	<main className="my-5 py-5">

		<Container className="px-0">
		</Container>
		
		<div id="wrapper">

			<div id="content-wrapper" className="d-flex flex-column">

				<div id="content">

					<div className="container-fluid">
					
						<div className="row">
							<h1 className="txt_center">Hungry? Get some food at the cafeteria!</h1>
						</div>
				
						<div className="row p_20 txt_center">
				
							<div>
								<Alert color="info">
									Please pick a version
								</Alert>
							</div>
				
							<div className="col-xl-6 col-md-6 mb-6">
								<a href="/cafeteria/task/2">
									<div className="column_wrapper">
										<div className="icon_container">
											<CupHot className="icon"/> 
										</div>
										<div className="column_txt">
											Cafeteria Task 2
										</div>
									</div>
								</a>
							</div>

							<div className="col-xl-6 col-md-6 mb-6">
								<a href="/cafeteria/task/3">
									<div className="column_wrapper">
										<div className="icon_container">
											<CupHotFill className="icon"/> 
										</div>
										<div className="column_txt">	
											Cafeteria Task 3
										</div>
									</div>
								</a>
							</div>
							
						</div>
					
					</div>
					
				</div>
				
			</div>
		
		</div>

	</main>

	</>
);

export default App;