import { Elements } from './elements';
import { Status } from './status';

const join = (collection: string[]): string => collection.join((', '));

export const create = (element: Elements): string => `Create ${element}`;

export const consume = (element: Elements, ...effect: string[]): string => `Consume ${element}: ${join(effect)}`;

export const exp = (points: number): string => `Gain ${points} Exp`;

export const push = (spaces: number): string => `Push ${spaces}`;

export const pull = (spaces: number): string => `Pull ${spaces}`;

export const attack = (damage: number): string => `Attack ${damage}`;

export const addAttack = (damage: number): string => `Add +${damage} Attack`;

export const move = (spaces: number): string => `Move ${spaces}`;

export const addMove = (spaces: number): string => `Move +${spaces}`;

export const jump = (): string => `Jump`;

export const range = (range: number): string => `Range ${range}`;

export const loot = (range: number): string => `Loot ${range}`;

export const heal = (amount: number, target: string): string => `Heal ${amount} - ${target}`;

export const gain = (status: Status, target: string): string => `${status} - ${target}`;

export const self = (): string => 'Self';

export const lose = (): string => 'Lose';

export const discard = (): string => 'Discard';

export const permanent = (): string => 'Permanent Bonus';

export const round = (): string => 'Round Bonus';

export const shield = (damage: number, target: string, duration: string): string => `Shield ${damage} - ${target}. ${duration}`;

export const augment = (when: string, ...what: string[]): string => `Augment: On ${when}: ${join(what)}. ${permanent}. (When another Augment is played, discard this card.)`;

export const target = (): string => 'Target';

export const targets = (amount: number): string => `Target ${amount}`;

export const hp = (amount: number): string => `Hit points: ${amount}`;

export const retaliate = (amount: number, target: string): string => `Retaliate ${amount} - ${target}`;

export const summon = (name: string, properties: string[]): string => `Summon ${name}. (${join(properties)}). ${permanent()}. ${lose()} when dies.`;

export const melee = (): string => 'melee attack';

export const adjacentEnemy = (): string => `Target one adjacent enemy`;

export const adjacentEnemies = (amount: string): string => `Target ${amount} adjacent enemies`;

export const signify = (): string => `To signify this, place one of your class tokens on this enemy for the round`;

export const switchSides = (distance: number): string => `Force one normal or elite enemy within ${range(distance)} to perform its turn this round as if its allies were enemies and its enemies were allies`;

