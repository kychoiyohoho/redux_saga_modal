


export const actionTypes = {
    ADD_ONE_ROW:"ADD_ONE_ROW",
    CREATE_PLAYERS:"Player/create",
    UPDATE_PLAYERS:"Player/update",
    DELETE_PLAYERS:"Player/delete"

};

export const addOneRowReducer=(props)=>{
  const voidRowData=props.data

  return{
   type:actionTypes.ADD_ONE_ROW,
   voidRowData
  }


  
}


