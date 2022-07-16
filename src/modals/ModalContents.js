import React from 'react'
import FirstAggrid from '../AgGrid/FirstAggrid.js'
import FirstModal from './FirstModal.js'
import SecondModal from './SecondModal.js'
import ThirdModal from './ThirdModal.js'

const ModalConents = (props) => {
  const {open,handleClose}=props;




  return (
    <div>
   <FirstModal  open={open} handleClose={handleClose} />
   <SecondModal  open={open} handleClose={handleClose} />
  
   </div>
  )
}

export default ModalConents