import Storage from "./Storage";
import { Adress } from "./config";

export default function sendTeam(param){
    fetch(Adress+`/test/${Storage('r','id',0)}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({test: param})
    })
    .then(res => {
      return res.json();
    })
    .then(
      (result) => {
      },
      (error) => {
        console.log(error);
      }
    )
}