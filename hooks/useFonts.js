import * as Font from 'expo-font';

export default useFonts = async () =>{
    await Font.loadAsync({
        'MontBold':require('../src/Assets/Fonts/Montserrat-Bold.ttf')

    });
}