import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Data({data}){
    const { name,points,car,carname , id} = data;
        return (
            <div>
                <b>{name}</b><span>({points})</span>
            </div>
    
        )
    }
 
function StudentList({serverData}) {
    return (
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell >Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {serverData.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell >{data.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
 
export default StudentList;