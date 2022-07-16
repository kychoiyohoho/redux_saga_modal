import React, { useState } from 'react'
import ModalConents from '../modals/ModalContents';
import Modal from '../modals/ModalContents';

const SecondButton = () => {

 
  const [open, setOpen]=useState(false)
  const onClick =()=>{
      setOpen(true);
      
      }
      const handleClose =()=>{
        setOpen(false);
    }

  return (
    <>
    <div onClick={()=>onClick()}>SecondButton</div>
    { open && <ModalConents open={open} handleClose={handleClose}/>}
    </>
  )
};

export default SecondButton