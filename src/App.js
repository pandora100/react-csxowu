
import React,{useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import "react-toastify/dist/ReactToastify.css";
import {  ToastContainer,toast } from "react-toastify";
import "./style.css";
toast.configure();
///
const Ul = styled.ul`
  height: ${({ height })=> height}px;
  opacity: ${({ height })=> height > 0 ? 1 : 0.1};
  overflow: hidden;
  transition: 0.1s ;
`;
///
export default function App() {
   const [hidden,setHidden]= useState(false);
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const moreRef = useRef(null);

///
const content = useRef(null);
const [list, setList] = useState([]);
const [height, setHeight] = useState(0);

 ///
 let [tecnologias, setTecnologias] = React.useState('');
  useEffect(() => {
        // *** After render, don't do anything, just remember we've seen the render
        if (hidden && moreRef.current) {
            console.log("hidden false");
            moreRef.current.className = 'escondido';
            buttonTextRef.current.innerText = 'Show less';
            buttonTextRef.current.nextElementSibling.setAttribute("data-icon", "caret-up");
        } else if(!hidden && moreRef.current) {
            console.log("hidden true");
            moreRef.current.className = 'aparecido';
            buttonTextRef.current.innerText = 'Show More';
            buttonTextRef.current.nextElementSibling.setAttribute("data-icon", "caret-down");

        }
    }, [hidden]);
  const onclick = () => { 
  setHidden(!hidden);
};
 ///
  useEffect(()=> {
    if (height > 0) {
      setHeight(content.current.scrollHeight);
    }
}, [list]);
//////
 const buscarTecnologias =() => {
   console.log("Inicio..."+Date.now());
        setTecnologias(Date.now())
       
         addToList("Inicio de carga previa de tecnologias...");
      //  return toast.success("Inicio de carga previa de tecnologias...", {
      //position: toast.POSITION.TOP_LEFT,
      //className: 'Label--info'
       toast.success(Date.now()+":Inicio de carga previa de tecnologias...", {
           position: toast.POSITION.BOTTOM_LEFT,
          className: 'Label--info'
 })
 };
    useEffect(() => {
    const timer = setTimeout(() => {
    buscarTecnologias();
     }, 20000);
    
    return () => clearTimeout(timer); 
   
   },[buscarTecnologias]);

   const addToList = ()=> {
    setList([...list, 'toastinfo']);
  };
  useEffect(()=> {
    if (height > 0) {
      setHeight(content.current.scrollHeight);
    }
 }, [list]);
  return (
    <React.Fragment>
    <button ref={buttonRef} onClick={onclick} className="Label">
    <span ref={buttonTextRef}>Show More</span>
    <i  className="fas fa-caret-down"></i>
  </button>

  <div ref={moreRef}> <p className="Label--info">
      
          Seleccione el Modulo además del Grupo ó Tecnología</p>
           <Ul height={height} ref={content}>
      {list.map((item, index)=> <li key={index}>{item} </li>)}
 
</Ul>
   <ToastContainer/>
  </div>
  </React.Fragment>
  );
}



