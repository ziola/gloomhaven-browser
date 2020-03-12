import { Button, FlatList } from 'react-native';
import React from 'react';
import { characters } from '../../data/characters';

export const CharactersScreen: React.FC<any> = ({navigation}) => (
    <FlatList
        data={characters}
        renderItem={({item, index}) => (
            <Button
                onPress={() => navigation.navigate("Skills")}
                title={item.name}
                color={index % 2 ? 'red' : 'blue'}
            />
        )}
    />
);
