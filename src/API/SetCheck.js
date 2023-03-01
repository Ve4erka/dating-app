import { Adress } from "./config";
import Storage from "./Storage";

export default function setCheck(el){
    fetch(Adress+`/choice/${Storage('r','id',0)}/${el}/${Storage('r','OnloadUserid',0)}`,{
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
        console.log('Успешно');
      },
      (error) => {
        console.log(error);
      }
    )
}