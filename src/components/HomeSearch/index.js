import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
const HomeSearch  = () =>{
    return (
        <View >
            {/* */}
            <View style={styles.inputBox}> 
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}> 
                <AntDesign name={'clockcircle'} size = {16}/>
                <Text>Now</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
            </View>
            </View>
            {/* */}
            
            {/* */}
            <View > 
                <Text></Text>
            </View>
        </View>
    );
};

export default HomeSearch;