import React, { useState } from 'react'
import ModalConents from '../modals/ModalContents'

const FirstButton = () => {
   
    const [open, setOpen]=useState(false)
    const onClick =()=>{
        setOpen(true);
        
        }
    const handleClose =()=>{
        setOpen(false);
    }


  return (
    <>
    <div onClick={()=>onClick()}>FirstButton</div>
   { open && <ModalConents open={open} handleClose={handleClose}/>}
    </>
  )
}

export default FirstButton