import  { useState } from 'react'
import { View, StatusBar, Text, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import { radians } from 'pdf-lib';

function BMRCal() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [checked, setChecked] = useState('');

    const calBMR = () => {
        if (checked !== "first" && checked !== "second") {
            Alert.alert("คำเตือน", "โปรดเลือกเพศ...");
            return;
        } else if (weight === '' || height === '' || age === '') {
            Alert.alert("คำเตือน", "กรุณากรอกข้อมูลให้ครบถ้วน...");
        } else {
            let bmr;
            if (checked === "first") {
                bmr = 66 + (13.7 * parseFloat(weight)) + (5 * parseFloat(height)) - (6.8 * parseFloat(age));
                Alert.alert("ฺBMR", bmr.toFixed(1));
            } else if (checked === "second") {
                bmr = 655 + (9.6 * parseFloat(weight)) + (1.8 * parseFloat(height)) - (4.7 * parseFloat(age));
                Alert.alert("BMR", bmr.toFixed(1));
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#f54969" />

                {/* AppBar */}
                <View style={styles.appbar}>
                    <Text style={styles.appbarText}>BMR Application</Text>
                </View>

                <View style={{ height: 100 }} />

                {/* Main */}
                <View style={styles.container}>
                    <Image source={require('./assets/images/bmrlogo.png')} style={styles.showLogo} />
                </View>

                <View style={{ height: 100 }} />

                <View style={{ marginHorizontal: 50, }}>

                    {/* RadioButton */}
                    <Text style={{ fontWeight: 'bold' }}>เพศ</Text>

                    <View style={styles.radioContainer}>
                        <RadioButton
                            value="first"
                            status={checked === "first" ? "checked" : "unchecked"}
                            onPress={() => setChecked("first")}
                        />
                        <Text onPress={() => setChecked("first")} style={styles.radioText}>
                            ชาย
                        </Text>
                    </View>

                    <View style={{ height: 10 }} />

                    <View style={styles.radioContainer}>
                        <RadioButton
                            value="second"
                            status={checked === "second" ? "checked" : "unchecked"}
                            onPress={() => setChecked("second")}
                        />
                        <Text onPress={() => setChecked("second")} style={styles.radioText}>
                            หญิง
                        </Text>
                    </View>

                    <View style={{ height: 30 }} />

                    {/* TextInput */}
                    <Text style={{ fontWeight: 'bold' }}>น้ำหนัก</Text>
                    <TextInput value={weight} onChangeText={setWeight} placeholder={'ป้อนน้ำหนัก'} style={styles.inputNumber} keyboardType='numeric' />

                    <View style={{ height: 30 }} />

                    <Text style={{ fontWeight: 'bold' }}>ส่วนสูง</Text>
                    <TextInput value={height} onChangeText={setHeight} placeholder={'ป้อนส่วนสูง'} style={styles.inputNumber} keyboardType='numeric' />

                    <View style={{ height: 30 }} />

                    <Text style={{ fontWeight: 'bold' }}>อายุ</Text>
                    <TextInput value={age} onChangeText={setAge} placeholder={'ป้อนอายุ'} style={styles.inputNumber} keyboardType='numeric' />

                    <View style={{ height: 25 }} />

                    {/* Button */}
                    <TouchableOpacity style={styles.btnCal} onPress={calBMR}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>คำนวณ BMR</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default BMRCal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    showLogo: {
        width: 150,
        height: 150,
    },
    appbar: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f54969',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appbarText: {
        color: 'white',
        fontSize: 20,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    radioText: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    inputNumber: {
        borderBottomWidth: 1, // ขีดเส้นใต้
        borderBottomColor: '#888', // สีของขีดเส้นใต้
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'right', // ทำให้ placeholder ไปอยู่ด้านหลัง
    },
    btnCal: {
        backgroundColor: '#f54969', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: 10
    }
});