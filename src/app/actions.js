"use server"

export async function login(prevState, formData){
  const username = formData.get("username");
  const password = formData.get("password");

  if(username === "admin" && password === "1234")
  {
    return "Login successful";
  }
  return "invalid username or password";
}