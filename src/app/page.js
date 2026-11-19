

// export default async function Home() {
//   const respose = await fetch(
//     "https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com",
//     {
//       cache: "no-store"
//     }
//   );

//   const students =await respose.json();
//   return (
//     <main className="min-h-screen bg-black-200 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Student Profile</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {students.map((student) => (
//           <div key={student.id} className="bg-white p-6 rounded-lg shadow-md">

//         <h2 className="text-xl font-semibold">{student.name}</h2>
//         <p className="mt-3 text-gray-600">{student.email}</p>
//       </div>
//         ))}
//       </div>
//     </main>
//   )}


// //SSR 
// export default async function Home() {
//   const respose = await fetch(
//     "https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com",
//     {
//       cache: "no-store"
//     }
//   );
//   const students = await respose.json();

//   return(
//     <main className="min-h-screen bg-black-200 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Student Profile</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {students.map((student) => (
//           <div key={student.id} className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">{student.name}</h2>
//             <p className="mt-3 text-gray-600">{student.email}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   )
// }



// "use client"
// import {useState} from "react";
// export default function Home() {
//   const [count , setCount] = useState(0);

// return (
//   <div className="flex flex-col items-center justify-center min-h-screen min-h-screen bg-black-200 p-8">
//     <h1 className="text-3xl font-bold text-center mb-8">Counter</h1>
//     <p className="text-xl mb-4">Count: {count}</p>
//     <button
//       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       onClick={() => setCount(count + 1)}
//     >
//       Increment
//     </button> 
//     <button
//       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
//       onClick={() => setCount(0)}
//     >
//       Reset
//     </button>

//     <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4"
//       onClick={() => setCount(count - 1)}
//     >
//       Decrement
//     </button>
//   </div>
// );

// }


// "use client"

// import { useEffect } from "react";
// export default function Home(){
//   useEffect(()=>{
//     document.title = "My Website"
//   },[])

//   return(
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Hello World</h1>
//     </div>
//   );
// }


// "use client"

// import {useState, useEffect } from "react";
// export default function Home(){
//   const [count, setCount] = useState(0)
//   useEffect(()=>{
//     console.log("Component mounted")
//   },[]);

//   return (
//     <div className="p-10">
//       <h1>Count: {count}</h1>
//       <button onClick={()=> setCount(count + 1)}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700">
//         Increment
//       </button>
//     </div>
//   );
// }


// "use client"

// import {useState} from "react";
// export default function Home(){
//   const [students, setStudents] = useState(null)
//   async function getStudent(){
//     const respose = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const data = await respose.json();
//     setStudents(data)
//   }
//   return(
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-5">
//         Student Profile
//       </h1>

//       <button onClick={getStudent}
//         className="bg-blue-500 text-white px-5 py-2 rounded-xl">Get student</button>

//         {student && (
//           <div className="mt-5 border p-5 rounded-lg">
//             <h2 className="text-xl font-blod">
//               Name: {students.name}
//             </h2>
//             </div>
//         )}
//     </div>

//   )
// }


// "use client"

// import {useState} from "react";
// export default function Home(){
//   const [weather, setWeather] = useState(null);
//   async function getWeather(){
//     const response = await fetch(
//       "https://api.open-meteo.com/v1/forecast?latitude=30.9&longitude=75.8&current=temperature_2m"
//     );
//     const data = await response.json();
//     setWeather(data.current.temperature_2m)
//   }
//   return (
//     <div>
//       <h1>Weather</h1>
//       <button onClick={getWeather}
//       className="bg-blue-500 px-4 py-4 rounded-lg">Get Weather</button>

//       {weather && (
//         <h2 className="text-red-500 text-3xl">Temperature: {weather}°C</h2>
//       )}
//     </div>
//   )
// }



// "use client"

// import {useState} from "react";
// export default function Home(){
//   const [search, setSearch] = useState("")
//   const products =[
//     "Laptop",
//     "Mobile",
//     "Tablet",
//     "Headphones",
//     "Smartwatch",
//     "Camera",
//     "Printer"
//   ];

//   const result =products.filter((product) =>
//   product.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

//   return(
//     <div>
//       <h1>Product Search</h1>
//       <input type="text"
//       placeholder="Search products"
//       value={search}
//       onChange={(e)=> setSearch(e.target.value)}
//       />

//       {result.map((product) =>(
//         <p key={product}>{product}</p>
//       ))}
//     </div>
//   )
// }



// "use client"

// import {useState} from "react";
// export default function Home(){
//   const [student, setStudent] = useState(null);

//   function getStudent(){
//     setStudent({
//       name: "Avnish singh",
//       course: "B.tech",
//       marks: 85
//     });
//   }

//   return(
//     <div>
//       <h1>Student Profile</h1>
//       <button onClick={getStudent}>Get Student</button>
//       {student && (
//         <div>
//           <h2>Name: {student.name}</h2>
//           <p>Course: {student.course}</p>
//           <p>Marks: {student.marks}</p>
//         </div>
//       )}
//     </div>
//   )
// }

// 'use client';

// import { useState } from 'react';

// export default function Home() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
// 			<h1 className="text-3xl font-bold">Counter</h1>
// 			<p className="text-xl">Count: {count}</p>
// 			<div className="flex gap-3">
// 				<button
// 					type="button"
// 					onClick={() => setCount((currentCount) => currentCount - 1)}
// 					className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
// 				>
// 					Decrement
// 				</button>
// 				<button
// 					type="button"
// 					onClick={() => setCount((currentCount) => currentCount + 1)}
// 					className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
// 				>
// 					Increment
// 				</button>
// 			</div>
// 		</main>
// 	);
// }



// "use client"

// import {useState } from  "react";

// export default function Home(){
// 	const [name,setName] = useState("");

// 	function handleSubmit(e)
// 	{
// 		e.preventDefault();
// 		alert("Hello "+ name)
// 	}

// 	return(
// 		<div>
// 			<div>
// 				<h1>Student Form</h1>
// 			</div>
// 			<form onSubmit={handleSubmit}>
// 				<input type = "text" placeholder ="Enter name"
// 				value={name} onChange={(e) => setName(e.target.value)}/>

// 				<button type="submit">Submit</button>
// 			</form>
// 		</div>
// 	)
// }


//form should have 1 input type , favourite color of user,
// if the color is redirect,green ,blue it should display a
// message color exist , otherwise it should display no color found .

//this questio is for homework


// "use client"
// import {useState} from "react";
// export default function Home(){

// 	const [name, setName]  = useState("");
// 	const [email, setEmail]  = useState("");
// 	const [message, setMesage]  = useState("");

// 	async function handleSubmit(e){
// 		e.preventDefault();

// 		const response =await fetch("/api/students",
// 			{
// 				method: "POST",
// 				headers : 
// 				{
// 					"Content-Type" : "application/json"
// 				},
// 				body: JSON.stringify({
// 					name:name,
// 					email:email
// 				})
// 			}
// 		)
// 		const data = await response.json();
// 	  setMessage(data.message)

// 	};

// 	return(
// 		<div>
// 			<h1>Student Form</h1>
// 			<form onSubmit={handleSubmit}>
// 				<input type = "text"
// 				placeholder="Enter your name"
// 				value={name}
// 				onChange={(e) => setName(e.target.value)}/>
// 				<br></br>

// 				<input type = "email"
// 				placeholder="Enter email"
// 				value={email}
// 				onChange={(e) => setName(e.target.value)}/>
// 				<br></br>

// 				<button type="submit">
// 					Submit
// 				</button>

// 			</form>

// 			<h3>{message}</h3>

// 		</div>
// 	)


	
// }

//FORM -POST METHOD

// export async function POST(request){
// 	const data=await request.json();

// 	console.log(data)
// 	return Response.josn(
// 		message: "Student added successfuly"  
// 	)
// }


//------Server Action-------

// "use client "

// import { useActionState } from "react"
// import (greetUser) from "./actions.js"

// export default function Home(){
// 	const [message, formAction] = useActionState(
// 		greetUser,

// 	);
// 	return(
// 		<div>
// 			<h1>Server Action</h1>
// 			<form action={formAction}>
// 				<input type="text" name="name"
// 				placeholder="Enter your name"/>
// 				<button type ="submit">Submit</button>
// 			</form>
// 			<h2>{message}</h2>
// 		</div>
// 	)
// }


// "use client"

// import { useActionState} from "react"
// import {login } from "./actions.js"

// export default function Home(){
// 	const [result ,action ] = useActionState(login, " ");

// 	return(
// 		<div>
// 			<h1>Login</h1>
// 			<form action ={action}>
// 				<input type="text"
// 				name="username"
// 				placeholder="Username"/>
				
// 				<br></br>

// 				<input type="password"
// 				name="password"
// 				placeholder="password"/>

// 				<br></br>

// 				<button type="submit">Submit</button>
// 			</form>
// 		</div>
// 	)
// }

// //------ validation--------

// "use Client"

// import {useState} from "react";
// export default function Home(){

// 	const [name, setName] = useState("")
// 	const [email, setEmail] = useState("")
// 	const [error, setError] = useState("")

// 	function handleSubmit(e){
// 		e.preventDefault();

// 		if(name === "" | email === ""){
// 			setError("All fields are required");
// 			return;
// 		}
// 		if(!email.includes("@")){
// 			setError("Enter a valid email");
// 			return;

// 		}
// 		setError("");
// 		alert("From submitted Successfull!!");
// 	}

// 	return(
// 		<div>
// 			<h2>Registration Form</h2>

// 			<form onSubmit ={handleSubmit}>
// 				<input type="text"
// 				placeholder="Enter name"
// 				value={name}
// 				onChange={(e) => setName(e.target.value)}/>

// 				<input type="text"
// 				placeholder="Enter email"
// 				value={email}
// 				onChange={(e) => setEmail(e.target.value)}/>

// 				<button type="submit">Register</button>


// 			</form>

// 			{error && <p>{error}</p>}
// 		</div>
// 	)
// }



//Create an application form for literature Club
//form should have, name, registration no,
// email ,section, department
//apply validation that all the fields are compulsory.






// "use client"

// import { useActionState } from "react"
// import {uploadFile} from "./actions";

// export default function Home(){
// 	const [message, formAction] = useActionState(uploadFile, "");
// 	return(
// 		<div>
// 			<h1>File Upload</h1>
// 			<form action={formAction}>
// 				<input type = "file" name="file"/>

// 				<br></br>
// 				<button type = "submit">Upload</button>



// 			</form>
// 			<p>{message}</p>
// 		</div>
// 	)
// }

// "use server"

// import fs from "fs/promises";
// import path from "path";

// export async function uploadFile(prevState, fromData){
// 	const file = FormData.get("file");

// 	//1. Check if file is selected 

// 	if(!file || !file.size===0){
// 		retrun "Please select a file";
// 	}

// 	//2.Check file type 
// 	const allowTypes = [
// 		"image/jpg",
// 		"image/png",
// 		"application/png"
// 	];

// 	if(!allowTypes.includes(file.type)){
// 		return "only jpg, png and pdf are allowed";
// 	}

// 	//Path of existing uploadd folder
// 	const filePath = Path2D.join(
// 		process.cwd(),
// 		"uploads",
// 		file.name
// 	);

// 	//get file data
// 	const bytes = await file.arrayBuffer();

// 	//save file 
// 	await fs.writeFile(filePath, Buffer.from(bytes));
// 	return "File uploaded successfully";


// }


// "use client"

// import { useState } from "react"
// import { resolve } from "styled-jsx/css";
// export default function Home(){
// 	const [like, setLikes] = useState(10);

// 	async function likePost(){
// 		setLikes(likes + 1); //immediate action

// 		await new Promise((resolve)=>setTimeout(resolve,5000));
// 		console.log("server operation completed");
// 	}

// 	return(
// 	<div>
// 		<p>Likes : {likes}
// 		</p>
// 		<button onClick={likePost}>
// 			Like
// 		</button>

// 	</div>
// 	)
// }


// "use client";

// import{useRouter} from "next/navigation";
// export default function Home(){
// 	const router = useRouter();
// 	async function login(){
// 		const response = await fetch("/api/login",{
// 			method: "POST",
// 			headers: {
// 				"Content=Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				username: "avnish",
// 				password: "1234"
// 			})
// 		})
// 		if(response.ok){
// 			router.push("/dashboard");
// 		}
// 	}
// 	return(
// 		<div>
// 			<h1>Login</h1>
// 			<button onClick={login}>Login</button>
// 		</div>

// 	);

// }





// "use server"
// (1) import { prisma } from "@/lib/prisma"; 
// async function updateEmail(formData) {
//   const id = formData.get("id")?.toString();
//   const email = formData.get("email")?.toString().trim();
  
//   if (!id || !email) throw new Error("Missing data");

//   const user = await prisma.user.update({
//     where: { id },
//     data: { email }
//   });

//   return user; 
// }



// "use server";
// import fs from "fs/promises";
// import path from "path";

// export async function uploadFile(prevState, formData) {
//   // (1) Use formData.get() to retrieve the uploaded file object
//   const file = formData.get("file");

//   // Check if file is selected
//   if (!file || file.size === 0) {
//     return "Please select a file";
//   }

//   // Check file type
//   const allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "application/pdf"
//   ];

//   // (2) Use .includes() to verify if the file type is in the allowed array
//   if (!allowedTypes.includes(file.type)) {
//     return "Only JPG, PNG and PDF files are allowed";
//   }

//   // Construct the target path to save the file inside the 'uploads' folder
//   const filePath = path.join(
//     process.cwd(),
//     "uploads",
//     file.name
//   );

//   try {
//     // Convert the File object into a Buffer to write it to disk
//     const buffer = Buffer.from(await file.arrayBuffer());
//     await fs.writeFile(filePath, buffer);

//     return "File uploaded successfully";
//   } catch (error) {
//     return "Failed to save file";
//   }
// }