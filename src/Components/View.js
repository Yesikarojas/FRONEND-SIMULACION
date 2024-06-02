import logo from '../images/logo.png'
import {Container, Navbar, Nav} from 'react-bootstrap';
import './styles.css';

const View = () =>{
    return (
        <Navbar className="bg-body-tertiary navbar-rounded" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={logo}
                    width="120"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="mx-auto">
                        <Nav.Link href="#students">Estudiantes</Nav.Link>
                        <Nav.Link href="#subjects">Materias</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>


    );
};


export default View;