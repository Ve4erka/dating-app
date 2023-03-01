import { Adress } from "./config";
import Storage from "./Storage";

export const uploadImage = (selectedImage) =>{
    const fileToUpload = selectedImage;
    const data = new FormData();
    data.append('file', {
            name: `${Storage('r','id',0)}.jpeg`,
            type:'image/jpeg',
            uri: fileToUpload,
    })
    //data.append('file_attachment', fileToUpload);
    //console.log(data);
    console.log('otpravka', selectedImage);
    //Please change file upload URL
   fetch(
        Adress+`/update/photo/${Storage('r','id',0)}/`,
        {
            method: "put",
            body: data,
            headers: {
                "enctype": "multipart/form-data; ",
            },
        }
    )
    .then(res => {
        return res.json();
      })
    .then(
        (result) => {
            Storage('w','photo',selectedImage);
        },
        (error) => {
            console.log(error);
        }
    )
   
}