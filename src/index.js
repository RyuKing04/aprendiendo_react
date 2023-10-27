import React from 'react';
import ReactDOM from 'react-dom/client';

const subameElSalario="Subame el salario";
const color= 'red';  
const sesion=true;
const pais='Costa Rica';
const amigos= ['Juan', 'Pedro', 'Pablo'];

const Usuario=() => {

  return(
    <div>
    <h1>Inicio de sesion exitoso</h1>
    <h1 className='titulo' style={{color: color}}>Hello World</h1>
  <p>Lets render this to the DOM</p>
  <h2>{subameElSalario} Por favor </h2>
  {pais && <p>El pais es:  {pais}</p>}
  <ul>
{amigos.map((amigos, index)=><li key={index}>{amigos}  
</li>
)}
    </ul>
    <p>tkm</p>
    </div>

  );
};

const App= ()=>{
return(

 <>
    {sesion===true ? <Usuario/> : <h1>Por favor inicie sesion</h1>}
    </>
);

}
  
// const verificarSesion=(sesion)=>{
//   if(sesion===true){
//     return JSX;
//   } else{
//     return <h1>Por favor inicie sesion</h1>
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {verificarSesion(sesion)}
//   </React.StrictMode>
// );
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App/>
   </React.StrictMode>
 );

