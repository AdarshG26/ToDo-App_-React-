import React from 'react'
import { ImRadioUnchecked } from "react-icons/im";
import { FaCircleCheck } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";


const TodoItems = (props) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=> {props.toggle(props.id)}} className='flex flex-1 items-center cursor-pointer'>
            {props.isComplete? <FaCircleCheck className='text-2xl text-green-500'/>: <ImRadioUnchecked className='text-2xl'/>}
            <p className={`text-slate-700 ml-4 text-[17px] ${props.isComplete? 'line-through': ""}`}>{props.text}</p>
        </div>
        <RiDeleteBinLine onClick={()=>{props.deleteTodo(props.id)}} className='text-2xl cursor-pointer'/>
    </div>
  )
}

export default TodoItems