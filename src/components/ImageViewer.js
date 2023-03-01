import { Image } from "react-native";
import { styles } from "../styles/styles";
import Storage from "../API/Storage";

export default function ImageViewer({ selectedImage }) {
    const imageSource = selectedImage !== null 
      ? { uri: selectedImage } 
      : Storage('r','photo',0);  
  
    return <Image source={imageSource} style={styles.modalWindowProfilePhoto} />;
}