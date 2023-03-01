import { Adress } from "./config";
import Storage from "./Storage";

export default function changeName (userName){

    fetch(Adress+`/update/username/${Storage('r','id',0)}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: userName})
    })
    .then(res => {
      return res.json();
    })
    .then(
      (result) => {
        Storage('w','name',userName);
      },
      (error) => {
        console.log(error);
      }
    )

};