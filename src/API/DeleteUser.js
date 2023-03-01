import { Adress } from "./config";
import Storage from "./Storage";

export default function deleteUser (navigation){

    fetch(Adress+`/delete/${Storage('r','id',0)}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status:200})
    })
    .then(res => {
      return res.json();
    })
    .then(
      (result) => {
        
        navigation.navigate('Login');
        
        Storage('w','all',['','',''])
      },
      (error) => {
        console.log(error);
      }
    )

};