import { Adress} from "./config";
import Profile from "../components/Profile";
import { setData } from "../components/Profile";
import Storage from "./Storage";

export default function loginUser (phone_number, password,navigation){
    fetch(Adress+'/login', {
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
          Storage('w','all',[ result.result.id,
                              result.result.username,
                              result.result.age,
                              result.result.phone,
                              result.result.password,
                              result.result.uri,
                              result.result.team,
          ])
            //setTimeout(function callBack(){
              navigation.navigate('Profile');
            //},1000)
            
        }
        console.log(result.result);
        
      },
      (error) => {
        console.log(error);
      }
    )

};