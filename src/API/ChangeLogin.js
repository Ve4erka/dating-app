import { Adress } from "./config";
import Storage from "./Storage";

export default function changeLogin (phone_number){
  fetch(Adress+`/update/login/${Storage('r','id',0)}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({login: phone_number})
  })
  .then(res => {
    return res.json();
  })
  .then(
    (result) => {
      Storage('w','phoneNumber',phone_number);
    },
    (error) => {
      console.log(error);
    }
  )
}