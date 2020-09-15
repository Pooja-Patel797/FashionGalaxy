 
 import React, { useState, useEffect } from "react";

 export const UserContext = React.createContext({
     name:"",
   email:"",
   id:"",
 });
 
 export const CartProvider = (props: any) => {
   const [name, setName] = useState(() => {
     const localData = localStorage.getItem("name");
     return localData ? JSON.parse(localData) : [];
   });
   const [email, setEmail] = useState(() => {
    const localData = localStorage.getItem("email");
    return localData ? JSON.parse(localData) : [];
  });
  const [id, setId] = useState(() => {
    const localData = localStorage.getItem("id");
    return localData ? JSON.parse(localData) : [];
  });
 
  
 
   return (
     <UserContext.Provider value={{ name:  }}>
       {console.log(cart)}
       {props.children}
     </UserContext.Provider>
   );
 };
 
 
 
 
 export const auth=()=>{

}