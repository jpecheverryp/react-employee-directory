import axios from "axios";
import dateParser from "./dateParser";

export default async function getEmployees() {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=20");
            const apiInfo = response.data.results;
            const myObject = apiInfo.map(({
                picture,
                name,
                phone,
                email,
                dob,
                login
            }) => {
                return {
                    picture,
                    name: name.first + " " + name.last,
                    phone,
                    email,
                    dob: dateParser(dob.date) ,
                    id: login.uuid
                }
            })
            return myObject
        } catch (err) {
            console.error(err)
        }
        
    }