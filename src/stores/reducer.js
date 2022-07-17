import { actionTypes } from "./action";

const initialState ={
    row :[]
}


 const SpecDocReducer=(state=initialState, action) =>{
  // console.log("action",[...state.row]);
   //console.log("action",{...action.voidRowData});
  console.log("Action",action);
    switch(action.type){
      
        case actionTypes.ADD_ONE_ROW:
            return   {...state,
                row:[...state.row,...action.voidRowData]
            }

        case actionTypes.REGISTER_SPECDOCS:
            return   {...state
               
            }
       
        default:
            return state;
    }
};

export default SpecDocReducer;