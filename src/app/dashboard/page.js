

// import {cookies} from "next/headers";

// import {redirect} from "next/navigation";
// export default async function Dashboard(){
//   const cookiesStore = await cookies();
//   const username = cookiesStore.get("username")?.value;
//   if(!username){
//     redirect("/");
//   }
//   return(
//     <div>
//       <h1>Welcome, {username}</h1>
//       <form action= "/api/logout" method = "POST">
//       <button type= "submit">LogOut<button>
//       </form>
//     </div>
//   )
// }

// session creation 

// "use client";

// import {useEffect } from "react";
// import {useRouter } from "next/navigation";

// export default function Dashboard(){
//   const router = useRouter();
//   useEffect(() =>
//   {
//     const login =alert("You logged In!!");

//     if(!login){
//       router.push("/");
//     }

//   }, [router]);
//   return <h1>Welcome to dashboard</h1>
// }

import {getSession, logout} from "../actions";
import {redirect } from "next/navigation";
export default async function Dashboard(){
  const username = await  getSession();
  if(!username){
    redirect("/");

  }

  return(
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {username}</h2>
      <form action={logout} method = "POST"
    </div>
  )