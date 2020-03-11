import { Button, FlatList } from 'react-native';
import React from 'react';
import { characters } from '../../data/characters';

export const CharactersScreen: React.FC = () => (
    <FlatList
        data={characters}
        renderItem={({item, index}) => (
            <Button
                onPress={() => alert(`You've clicked: ${item.name}`)}
                title={item.name}
                color={index % 2 ? 'red' : 'blue'}
            />
        )}
    />
);
