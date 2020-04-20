import React  from "react";
import "./Ninjas.css"
 const Ninjas =({ninjas,deleteNinja})=> {

    const handleClick=(id)=>{
        console.log("id clique",id);
       deleteNinja(id);

    }
 
    
    const ninjaList=ninjas.map(person => {
        return person.age<27 ? (
            <div className="ninja" key={person.id}>
              <div>name: {person.name}</div>
              <div>age: {person.age}</div>
              <div>belt: {person.belt}</div>
              <button onClick={()=>{handleClick(person.id)}}>DeleteNinija</button>
            </div>
        ):null;
       })
       return(
           <div className="ninja-list">
             {ninjaList}
           </div>
            
             )
   
  }

export default Ninjas;
// version two so simple to show UI compoenet /statlessComponent
// const Ninjas =({ninjas})=> {
//     return(
//         <div className="ninja-list">
//           {
//              ninjas.map(person => {
//                  return(
//                      <div className="ninja" key={person.id}>
//                        <div>name: {person.name}</div>
//                        <div>age: {person.age}</div>
//                        <div>belt: {person.belt}</div>
//                      </div>
//                  )
//                 })
//           }
//         </div>
//           )  
// }
// *************************first conditionnal method 
// const ninjaList=ninjas.map(person => {
//     if(person.age<27){
//     return(
//         <div className="ninja" key={person.id}>
//           <div>name: {person.name}</div>
//           <div>age: {person.age}</div>
//           <div>belt: {person.belt}</div>
//         </div>
//     )}else{
//         return null
//     }
//    })
