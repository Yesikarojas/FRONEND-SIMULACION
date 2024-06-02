import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table,Pagination} from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Collapse, Box, TextField } from '@mui/material';



const Students = ({ numRecords, listBy, sortOrder }) => {

    const url = `http://localhost:4000/students?pageNumber=${numRecords}&pageSize=${numRecords}&sortBy=${listBy}&sortDirection=${sortOrder}`;
    const [students, setStudents]= useState([]);

    const urls = `http://localhost:4000/subjects`;
    const [subject, setSubject]= useState([]);
    
    useEffect(()=>{
        getStudents();
    },[numRecords,listBy,sortOrder]);

    const getStudents = async () =>{
        const res = await axios.get(url);
        setStudents(res.data);
    }
    useEffect(()=>{
      getSubjects();
    });

    const getSubjects = async () =>{
      const res = await axios.get(urls);
      setSubject(res.data);
    }

    const [subjectDetails, setSubjectDetails] = useState({});

    const toggleSubjects = (index) => {
      const newStudents = [...students];
      newStudents[index].showSubjects =!newStudents[index].showSubjects;
      setStudents(newStudents);
    };

  return (
    <div>
      <div className='p-3' style={{ borderRadius: "10px", overflow: "hidden" }}>
        <Table responsive="sm" table-rounded>
          <thead >
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
                <td> <IconButton onClick={() => toggleSubjects(id)}>
                    <VisibilityIcon />
                  </IconButton>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                      <Collapse in={student.showSubjects} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                          <Table size="small" aria-label="details">
                            <TableHead>
                              <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Creditos</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {subject.map((sub) => (
                                <TableRow key={sub.id}>
                                  <TableCell>{sub.name}</TableCell>
                                  <TableCell>{sub.credits}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </td>
              </tr>
            
            ))}
          </tbody>
        </Table>
        <Pagination >
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item >{14}</Pagination.Item>

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
