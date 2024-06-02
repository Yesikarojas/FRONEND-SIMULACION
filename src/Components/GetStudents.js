import React, { useState } from 'react';
import {Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';
import Students from './Students'; 
import View from './View';
import './styles.css';

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
        <div className="get-students-container">
            <View />

            <div className='p-5'>
                <Row className="align-items-center mb-3">
                   
                    <Col xs={12} md={3}>
                        <div>
                            <label># Registros</label>
                            <input type='number' value={numRecords} onChange={handleNumRecordsChange} />
                        </div>
                    </Col>
                    
                    <Col xs={12} md={3}>
                        <div>
                            <label>Listar por</label>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={listBy}
                                onSelect={handleListBySelect}
                                variant="success"
                            >
                                <Dropdown.Item eventKey="name">Nombre</Dropdown.Item>
                                <Dropdown.Item eventKey="age">Edad</Dropdown.Item>
                                <Dropdown.Item eventKey="document_number">Número de documento</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Col>
                    
                    <Col xs={12} md={3}>
                        <div>
                             <label>Ordenar</label>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={sortOrder}
                                onSelect={handleSortOrderSelect}
                                variant="success"
                            >
                                <Dropdown.Item eventKey="asc">Ascendente</Dropdown.Item>
                                <Dropdown.Item eventKey="desc">Descendente</Dropdown.Item>
                            </DropdownButton>
                        </div>
                       
                    </Col>
                    <Col xs={12} md={3}>
                        
                    </Col>
                </Row>

                <Students numRecords={numRecords} listBy={listBy} sortOrder={sortOrder} />
            </div>
        </div>
    );
};

export default GetStudents;
