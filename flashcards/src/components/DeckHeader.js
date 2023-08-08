import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//note: use tailwind
const DeckHeader = ({ decktitle }) => {
    return (
        <View>
            <Text>{decktitle}</Text>
        </View>
    )
}
export default DeckHeader;