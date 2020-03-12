import { FlatList, Text } from 'react-native';
import React from 'react';
import { Skill, skills } from '../../data/skills';

export const SkillsScreen: React.FC = () => (
    <FlatList
        data={skills}
        renderItem={({item}) => <SkillView skill={item}/>}
    />
);

const SkillView: React.FC<{ skill: Skill }> = ({skill}) => (
    <Text>{skill.name}</Text>
)
