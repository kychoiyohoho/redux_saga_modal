


export const actionTypes = {
    ADD_ONE_ROW:"ADD_ONE_ROW",
    REGISTER_SPECDOCS:"REGISTER_SPECDOCS",
    UPDATE_PLAYERS:"Player/update",
    DELETE_PLAYERS:"Player/delete"

};

export const addOneRowReducer=(props)=>{
  const voidRowData=props.data

  return{
   type:actionTypes.ADD_ONE_ROW,
   voidRowData
  }}

  export const regisSpecDoc=(props)=>{
   console.log("props",props);
  const SpecDocData = {...props}
  //const SpecDocData = JSON.stringify(props)
    return{
      type:actionTypes.REGISTER_SPECDOCS,
      SpecDocData
      
    }
  }

  



