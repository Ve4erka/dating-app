import Storage from "./Storage";
import { Adress } from "./config";

export default function onloadPeople(){
    console.log('Загружен');
    fetch(Adress+`/choice/${Storage('r','id',0)}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
            console.log(result);
            Storage('w','OnloadUserphoto',result.result.uri);
            Storage('w','OnloadUserage',result.result.age);
            Storage('w','OnloadUsername',result.result.username);
            Storage('w','OnloadUserid',result.result.id);
        },
        (error) => {
          console.log(error);
        }
      )
}