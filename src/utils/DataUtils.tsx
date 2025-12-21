
import images from "./AssetsUtils";
import { vartype, reqtype } from "@/interfaces/enums";


export const colors = [
    { color: "bg-black" },
    { color: "bg-[#0C35BC]" },
    { color: "bg-rose-500" },
    { color: "bg-green-500" },
    { color: "bg-amber-400" },
    { color: "bg-gray-500" },
    { color: "bg-teal-500" },
]

export const contenderVariables = [
    { name: "name", type: vartype.text, requirement: reqtype.default },
    { name: "age", type: vartype.number, requirement: reqtype.required },
    { name: "occupation", type: vartype.text, requirement: reqtype.required },
    { name: "email", type: vartype.email, requirement: reqtype.optional },
    { name: "location", type: vartype.text, requirement: reqtype.optional },
]

export const contenderDetails = [
    { id: 1, name: "Paulina Kaume", age: 26, occupation: "Care taker", votes: 340, percentage: "28%", image: images.contendImg, email: "paulina.kaume@example.com" },
    { id: 2, name: "Adu Osei Bonsu", age: 26, occupation: "Care taker", votes: 340, percentage: "28%", image: images.contendImg1, location: "Accra" },
    { id: 3, name: "Jane Doe", age: 30, occupation: "Software Engineer", votes: 420, percentage: "35%", image: images.contendImg2, email: "jane.doe@example.com" },
    { id: 4, name: "John Smith", age: 29, occupation: "Graphic Designer", votes: 280, percentage: "23%", image: images.contendImg3 },
    { id: 5, name: "Emily Johnson", age: 24, occupation: "Marketing Specialist", votes: 310, percentage: "26%", image: images.contendImg, email: "emily.johnson@example.com", location: "New York" },
    { id: 6, name: "Michael Brown", age: 32, occupation: "Photographer", votes: 390, percentage: "33%", image: images.contendImg2 },
];