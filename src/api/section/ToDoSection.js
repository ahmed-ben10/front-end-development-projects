import axios from "axios";

export default class ToDoSection {
    fetchAll(){
        return axios.get("https://jsonplaceholder.typicode.com/todos").then((response) =>{
            return Promise.resolve(response);
        }).catch((reason) => {
            return Promise.reject(reason);
        })
    }
}