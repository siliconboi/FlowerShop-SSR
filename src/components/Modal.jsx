import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export const Modal =({children})=>{
const elRef =useRef(null)

if(!elRef.current)
elRef.current = document.createElement("div")
elRef.current.className = "h-full"

useEffect(()=>{
const modalRoot = document.getElementById("modal")
modalRoot.appendChild(elRef.current)

return ()=> modalRoot.removeChild(elRef.current)
},[])

return createPortal(<div className="h-full">{children}</div>,elRef.current)
}