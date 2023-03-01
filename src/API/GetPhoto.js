import { useState } from "react";
import { Adress } from "./config";
import Storage from "./Storage";

export function getPhoto(){

    fetch(Adress+`/photo/${Storage('r','id',0)}`, {
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
            console.log(result.uri);
            Storage('w','photo',result.uri);
        },
        (error) => {
          console.log(error);
        }
      )

}