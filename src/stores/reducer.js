import { actionTypes } from "./action";

const initialState ={
    row :[]
}
// {row:[]}
//

 const SpecDocReducer=(state=initialState, action) =>{
   console.log("action",[...state.row]);
   console.log("action",{...action.voidRowData});
  
    switch(action.type){
      
        case actionTypes.ADD_ONE_ROW:
            return   {...state,
                row:[...state.row,...action.voidRowData]
            }
       
        default:
            return state;
    }
};

export default SpecDocReducer;