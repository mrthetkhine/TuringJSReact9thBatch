/*
let promiseState : string = "pending";
promiseState = "resolved";
promiseState = "rejected";
promiseState = "EverytingElse"
*/
type Hello = "Hello";
let data :Hello = "Hello";

type PromiseState = "pending" | "resolved" | "rejected";
let state:PromiseState = "resolved";
state = "pending";
//state = "another"