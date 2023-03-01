import { Adress } from "./config";
import Storage from "./Storage";

export default function changeAge (userAge){

    fetch(Adress+`/update/userage/${Storage('r','id',0)}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userage: userAge})
    })
    .then(res => {
      return res.json();
    })
    .then(
      (result) => {
        Storage('w','age',userAge);
      },
      (error) => {
        console.log(error);
      }
    )
    
};