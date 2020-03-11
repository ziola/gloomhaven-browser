import { Elements } from './elements';

export const createElement = (element: Elements): string => `Create ${element}`;

export const consumeElement = (element: Elements, effect: string): string => `Consume ${element} for ${effect}`;

export const gainExp = (points: number): string => `Gain ${points} Exp`;

export const push = (spaces: number): string => `Push ${spaces}`;

export const pull = (spaces: number): string => `Pull ${spaces}`;

export const attack = (damage: number): string => `Attack ${damage}`;

export const range = (range: number): string => `Range ${range}`;

export const loot = (range: number): string => `Loot ${range}`;

export const Heal = (range: number, target: string): string => `Heal ${range} - ${target}`;
