import { Button } from '@mui/material';
import { AgGridReact } from 'ag-grid-react'
import React, { useEffect,  useState } from 'react'
import { useDispatch } from 'react-redux';
import { addOneRowReducer, regisSpecDoc } from '../stores/action';
import { useSelector } from 'react-redux';

const FirstAggrid = () => {
  const[addRowData,setAddRowData]=useState();
  const [specDoc, setSpecDoc] = useState();
  const dispatch=useDispatch();
    const columnDefs = [
        { headerName: "ID", field: "id",checkboxSelection:true,headerCheckboxSelection:true },
        { headerName: "Name", field: "name" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" },
        { headerName: "Date of Birth", field: "dob" },
        {headerName:"변경사항저장",
        field:"modifiedData",
        cellRendererFramework:(params) =>(
          <input type="checkbox" name="xxx"></input>
        )
      }
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



  const addOneRow=()=>{
    dispatch(addOneRowReducer({...voidData}));
    pushDataToRow(rowData);
  }



  //테이블 index 로 아이디 순차적으로 진행
 const pushDataToRow=(props)=>{
  const tableData = {...props,row:props.row.map(({...item},idx)=>({...item,id:idx+1}))}
  
   setAddRowData(tableData.row);
  
   console.log("tableData",tableData.row);
 }
//checkbox
const onSelectionChanged=(event)=>{
const selectedSpecDoc=event.api.getSelectedRows();
setSpecDoc(selectedSpecDoc);
}
//selected SpecDoc Data
const onSelectedSpecDoc=()=>{
dispatch(regisSpecDoc(specDoc));
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
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
          rowMultiSelectWithClick={true}
          suppressRowClickSelection={true}
          overlayNoRowsTemplate={"데이터를 추가해 주세요"}
        />
      <Button onClick={() =>onSelectedSpecDoc()}variant="outlined">등록</Button>
    </div>
    </>
  )
}

export default FirstAggrid