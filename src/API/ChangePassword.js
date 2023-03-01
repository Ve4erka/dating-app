import { Adress } from "./config";
import Storage from "./Storage";

export default function changePassword (password){
    fetch(Adress+`/update/password/${Storage('r','id',0)}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password: password})
      })
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          Storage('w','password',password);
        },
        (error) => {
          console.log(error);
        }
      )
}