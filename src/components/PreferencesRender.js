import { styles } from "../styles/styles";
import { View, Text } from "react-native";
export default function PreferencesRender({data}) {
    const dataInfo = data == false ? 'Полагаюсь на себя':'Командный игрок'
    console.log('Я ЗАШЕЛ')
    return (
        <View style={styles.profilePreferences}>
            <Text style = {styles.profilePreferencesText}>{dataInfo}</Text>
        </View>
    )
}