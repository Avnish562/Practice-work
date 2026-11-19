// "use server"

// import fs from "fs/promises"
// import path from "path"


// export async function uploadFile(formData){
//   const file = formData.get("file");
//   const bytes = await file.arrayButter();
//   const buffer =Buffer.from(bytes);
//   const filePath = path.join("uploads", )



"use server";

import {redirect} from "next/navigation";
const sessions = new Map();

export async function  login(fromData){
  const username = fromData.get("username");
  sessions.set("session1", username);
  redirect("/dashboard");
}
export async function logout(){
  sessions.delete("session1");
  redirect("/");
}
export async function getSession(){
  return sessions.get("session1");

}


