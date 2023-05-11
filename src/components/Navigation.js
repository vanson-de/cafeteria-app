import React, { useState } from 'react';

import {
  Navbar, Nav, Collapse, NavbarToggler,
  NavbarBrand, NavLink, NavItem
} from 'reactstrap';

import { CupHotFill } from 'react-bootstrap-icons';

const Navigation = (props) => {

	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (

	<Navbar className="navbar-light" fixed="top" color="light">

		<NavbarBrand href="/" className="me-auto">
			<CupHotFill className="nav_logo"/>
			<span>Cafeteria App</span>
		</NavbarBrand>
		
		    <NavbarToggler className="me-2"
				onClick={toggleNavbar}
			/>

			<Collapse isOpen={!collapsed} navbar>
		
				<Nav navbar>		
						<>
							<NavItem>
								<NavLink href="/cafeteria/task/2">Task 2</NavLink>
							</NavItem>
		
							<NavItem>
								<NavLink href="/cafeteria/task/3">Task 3</NavLink>
							</NavItem>
							
							<NavItem>
								<hr></hr>
							</NavItem>
							
							<NavItem>
								<NavLink href="https://www.christofwendt.de/" target="_blank">christofwendt.de</NavLink>
							</NavItem>

						</>
					
				</Nav>
		
			</Collapse>

		</Navbar>
	);
}

export default Navigation;

