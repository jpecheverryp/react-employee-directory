import axios from "axios";

export default {
    getEmployees: async function() {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=20")
            const apiInfo = response.data.results;
            const myObject = apiInfo.map(({
                picture,
                name,
                phone,
                email,
                dob
            }) => {
                return {
                    picture,
                    name,
                    phone,
                    email,
                    dob
                }
            })
            return myObject
        } catch (err) {
            console.error(err)
        }
        
    }
}