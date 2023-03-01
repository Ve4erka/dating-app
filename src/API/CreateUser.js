import { Adress } from "./config";
import Storage from "./Storage";

export default function createUser (phone_number, password,navigation){

    fetch(Adress+'/add', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone_number: phone_number, password:password})
    })
    .then(res => {
      return res.json();
    })
    .then(
      (result) => {
        if(result.result.status == 200){
          navigation.navigate('Profile');
        }
        Storage('w','all',[ result.result.id,
                            result.result.username,
                            result.result.age,
                            result.result.phone,
                            result.result.password
        ])
      },
      (error) => {
        console.log(error);
      }
    )

};