import cookieParser from "cookie-parser";
import express from "express";

const app=express();

// built in middlewares

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// custom

// app.use("/users",)

export {app}