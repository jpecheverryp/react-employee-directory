import axios from "axios";

export default {
    getEmployees: async function() {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=20");
            const apiInfo = response.data.results;
            console.log(apiInfo);
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
                    dob,
                    id: login.uuid
                }
            })
            return myObject
        } catch (err) {
            console.error(err)
        }
        
    }
}