import {NextRespose } from "next/server";
export async function POST(request){
  const response = NextResponse.redirect(
    new URL("/", request.url),303
  );
  response.cookies.set("username","",{
    httpOnly"true,
    path:"/",
    maxAge:60*60
  });
  return response;
}


//create a next js app to save username and password in a cookie and 