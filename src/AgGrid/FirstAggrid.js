import { Button, ButtonBase } from '@mui/material';
import { AgGridReact } from 'ag-grid-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addOneRowReducer } from '../stores/action';
import { useSelector } from 'react-redux';

const FirstAggrid = () => {
  const[addRowData,setAddRowData]=useState();
  const dispatch=useDispatch();
    const columnDefs = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" },
        { headerName: "Date of Birth", field: "dob" },
       ];
   
 
    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        editable: true
        
      };
    const onCellClicked =(e)=>{
            console.log(e.data);
          }
  
//한 행 추가
const voidData={
  data:[{
  id:'',
  name:'',
  email:'',
  phone:'',
  dob:''}]

   
};
useEffect(()=>{
 addOneRow();
},[]);

const rowData=useSelector(state =>state.SpecDocReducer);
const nextId = useRef(0);

  const addOneRow=()=>{
    dispatch(addOneRowReducer({...voidData}));
    pushDataToRow(rowData);
  }


 

 const pushDataToRow=(props)=>{
  const tableData = {...props,row:props.row.map(({...item})=>({...item,id:nextId.current +=1}))}
  
   setAddRowData(tableData.row);
  
   console.log("tableData",tableData.row);
 }
  return (
    <>
      
    <Button onClick={()=>{addOneRow()}}variant="outlined">추가</Button>
    <div className="ag-theme-alpine" style={{ height: "400px" }}>
       
    
         <AgGridReact
          rowData={addRowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onCellClicked={onCellClicked}
          overlayNoRowsTemplate={"데이터를 추가해 주세요"}
        />

    </div>
    </>
  )
}

export default FirstAggrid