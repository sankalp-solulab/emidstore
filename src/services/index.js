<<<<<<< HEAD
import axios from "axios";
const baseURL = "http://18.225.26.172:4321/api/v1/";

const user = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
});

=======
import axios from "axios";
const baseURL = "http://18.225.26.172:4321/api/v1/";

const user = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
});

>>>>>>> 904f33c9cdb907342bf25f9884734ebd5c4d178a
export default user;