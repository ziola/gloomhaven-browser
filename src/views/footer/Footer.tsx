import { StyleSheet, View } from 'react-native';
import React from 'react';

export const Footer: React.FC = ({children}) => (
    <View style={styles.footer}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'center',
        backgroundColor: 'lightgrey'
    }
});
