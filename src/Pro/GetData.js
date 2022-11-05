// // import React from 'react'
// // import Register from './Register';
// // import Login from './Login'


// // const GetData = ({data}) => {
// //   const Data =({no}) =>{
// //     return(
// //     <div>
// //     {data?.map((curr) => {
// //       return(<div>
// //         <p>name:{curr.name}</p>
// //         <p>email:{curr.email}</p>
// //         <p>password:{curr.pass}</p>
// //       </div>)
// //     })}
// //   </div>
  
// //   return (
// //     <>
// //     <div>
// //     {data?.map((curr) => {
// //       return(<div>
// //         <p>name:{curr.name}</p>
// //         <p>email:{curr.email}</p>
// //         <p>password:{curr.pass}</p>
// //       </div>)
// //     })}}
// //   </div>
  

// //     </>
// //   ))
// // }

// // export default GetData

// import React from 'react'
// import {useNavigate  } from "react-router-dom";
// import Swal from 'sweetalert2';

// const GetData = () => {
//     const navigate = useNavigate();
//     localStorage.getItem("obj");
//     obj.filter(load =>{
//       load.LoggeIn =  false
//     console.log(load.LoggeIn,"loooooood")
//     })
    
//     const handleOnLogout = () =>{
  
//     console.log(res)

//         navigate("/login")  
//         Swal.fire('You have Logged Off successfully')
//     }

//   return (
//     <>
//     <div>
//         <form onSubmit={handleOnLogout}>
//             <button type="submit">Log Out</button>
//         </form>
//     </div>
//     </>
//   )
// }

// export default GetData  