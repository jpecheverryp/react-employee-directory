import axios from "axios";

export default {
    getEmployees: async function() {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=20")
            return response.data.results
        } catch (err) {
            console.error(err)
        }
        
    }
}