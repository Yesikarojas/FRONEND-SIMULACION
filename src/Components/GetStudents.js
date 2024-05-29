import React, { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, DropdownButton, Dropdown, Table, Pagination } from 'react-bootstrap';
import Students from './Students'; 

const GetStudents = () => {
    const [numRecords, setNumRecords] = useState(1); 
    const [listBy, setListBy] = useState('name'); 
    const [sortOrder, setSortOrder] = useState('asc'); 

    const handleNumRecordsChange = (e) => {
        setNumRecords(e.target.value);
    };

    const handleListBySelect = (e) => {
        setListBy(e);
    };

    const handleSortOrderSelect = (e) => {
        setSortOrder(e);
    };

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">SIMULACIÓN</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#enrollments">Inscripciones</Nav.Link>
                        <Nav.Link href="#students">Estudiantes</Nav.Link>
                        <Nav.Link href="#subjects">Materias</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className='p-5'>
                <Row className="align-items-center mb-3">
                    <Col xs={12} md={2}>
                        <label>Registros por página</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <input type='number' value={numRecords} onChange={handleNumRecordsChange} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>Listar por</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={listBy}
                            onSelect={handleListBySelect}
                        >
                            <Dropdown.Item eventKey="name">Nombre</Dropdown.Item>
                            <Dropdown.Item eventKey="age">Edad</Dropdown.Item>
                            <Dropdown.Item eventKey="document_number">Número de documento</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col xs={12} md={2}>
                        <label>Ordenar</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={sortOrder}
                            onSelect={handleSortOrderSelect}
                        >
                            <Dropdown.Item eventKey="asc">Ascendente</Dropdown.Item>
                            <Dropdown.Item eventKey="desc">Descendente</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>

                <GetStudents numRecords={numRecords} listBy={listBy} sortOrder={sortOrder} />
            </div>
        </div>
    );
};

export default GetStudents;
