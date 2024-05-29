import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table,Pagination} from 'react-bootstrap';

const Students = ({ numRecords, listBy, sortOrder }) => {

    const url = `http://localhost:4000/students?pageNumber=${numRecords}&pageSize=23&sortBy=${listBy}&sortDirection=${sortOrder}`;
            
    const [students, setStudents]= useState([]);



    useEffect(()=>{
        getStudents();
    },[numRecords,listBy,sortOrder]);

    const getStudents = async () =>{
        const res = await axios.get(url);
        console.log(res.data);
        setStudents(res.data);
    }

  return (
    <div>
      <div className='p-5'>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Tipo de documento</th>
              <th>Número de documento</th>
              <th>Estado</th>
              <th>Materias inscritas</th>
            </tr>
          </thead>
          <tbody>
            { students.map((student, id)=>(
              <tr key = {student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.document_type}</td>
                <td>{student.document_number}</td>
                <td>{student.status}</td>
                <td>T</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        
      </div>


    </div>
  )
}

export default Students
