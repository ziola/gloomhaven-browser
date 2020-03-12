import {
    addAttack,
    addMove,
    adjacentEnemies,
    adjacentEnemy,
    attack,
    augment,
    consume,
    create,
    discard,
    exp,
    gain,
    heal,
    hp,
    jump,
    loot,
    lose,
    melee,
    move,
    permanent,
    push,
    range,
    retaliate,
    round,
    self,
    shield,
    signify,
    summon,
    switchSides,
    target,
    targets
} from './helpers';
import { Elements } from './elements';
import { Status } from './status';

export interface Skill {
    id: number;
    character: string;
    name: string;
    initiative: number;
    topActions: string[];
    bottomActions: string[];
    level: string;
}

export const skills: Skill[] = [
    {
        id: 116,
        character: 'mindthief',
        name: 'Submissive Affliction',
        initiative: 48,
        topActions: [
            `${attack(2)} - ${addAttack(1)} for each negative condition on the target`,
            exp(1)
        ],
        bottomActions: [
            `Force one enemy with ${range(5)} to perform ${attack(2)} ${range(0)} with you controlling the action`
        ],
        level: '1'
    },
    {
        id: 117,
        character: 'mindthief',
        name: 'Into the Night',
        initiative: 14,
        topActions: [
            loot(1),
            create(Elements.Night)
        ],
        bottomActions: [
            gain(Status.Invisible, self())
        ],
        level: '1'
    },
    {
        id: 118,
        character: 'mindthief',
        name: 'Fearsome Blade',
        initiative: 27,
        topActions: [
            `${attack(2)} - ${push(3)}`,
            exp(1)
        ],
        bottomActions: [
            move(4),
            attack(2),
            exp(2),
            lose()
        ],
        level: '1'
    },
    {
        id: 119,
        character: 'mindthief',
        name: 'Feedback Loop',
        initiative: 79,
        topActions: [
            augment(melee(), shield(1, self(), round())),
            attack(2),
            exp(1)
        ],
        bottomActions: [
            move(3),
            jump(),
            `If you end this movement in the same hex you started in, perform ${gain(Status.Muddle, 'Target all enemies moved through')}`
        ],
        level: '1'
    },
    {
        id: 120,
        character: 'mindthief',
        name: 'Gnawing Horde',
        initiative: 80,
        topActions: [
            summon('Rat Swarm', [
                    hp(6),
                    move(1),
                    attack(2),
                    range(0),
                    gain(Status.Poison, target())
                ]),
            exp(2),
        ],
        bottomActions: [
            move(4)
        ],
        level: '1'
    },
    {
        id: 121,
        character: 'mindthief',
        name: `The Mind's Weakness`,
        initiative: 75,
        topActions: [
            augment(melee(), addAttack(2)),
            attack(1),
            exp(1),
        ],
        bottomActions: [
            attack(1),
            gain(Status.Wound, target()),
        ],
        level: '1'
    },
    {
        id: 122,
        character: 'mindthief',
        name: 'PArasite Influence',
        initiative: 71,
        topActions: [
            augment(melee(), heal(2, self())),
            attack(1),
            exp(1),
        ],
        bottomActions: [
            `Force one enemy with ${range(4)} to perform ${move(1)} with you controlling it's actions`
        ],
        level: '1'
    },
    {
        id: 123,
        character: 'mindthief',
        name: 'Scurry',
        initiative: 20,
        topActions: [
            move(3),
            attack(1)
        ],
        bottomActions: [
            loot(2),
            exp(1),
            lose()
        ],
        level: '1'
    },
    {
        id: 124,
        character: 'mindthief',
        name: 'Perverse Edge',
        initiative: 8,
        topActions: [
            attack(3),
            `${addAttack(2)} and gain ${exp(1)} for each negative condition on the target`,
            lose()
        ],
        bottomActions: [
            attack(1),
            range(2),
            gain(Status.Stun, target()),
            create(Elements.Ice),
            exp(1)
        ],
        level: '1'
    },
    {
        id: 125,
        character: 'mindthief',
        name: 'Empathetic Assault',
        initiative: 11,
        topActions: [
            attack(4),
            range(5),
            gain(Status.Disarm, target()),
            create(Elements.Ice),
            exp(2),
            lose()
        ],
        bottomActions: [
            move(2),
            heal(2, self())
        ],
        level: '1'
    },
    {
        id: 126,
        character: 'mindthief',
        name: 'Withering Claw',
        initiative: 77,
        topActions: [
            augment(melee(), gain(Status.Poison, target()), gain(Status.Muddle, target())),
            attack(1),
            exp(1)
        ],
        bottomActions: [
            `One summoned ally within ${range(3)} performs ${addMove(1)} with you controlling its actions`
        ],
        level: 'X'
    },
    {
        id: 127,
        character: 'mindthief',
        name: 'Possession',
        initiative: 51,
        topActions: [
            `One adjacent ally may perform`,
            attack(6),
            exp(2),
            lose()
        ],
        bottomActions: [
            `One ally within ${range(3)} may perform`,
            move(4)
        ],
        level: 'X'
    },
    {
        id: 128,
        character: 'mindthief',
        name: 'Frigid Apparition',
        initiative: 29,
        topActions: [
            attack(3),
            consume(Elements.Ice, gain(Status.Stun, target()), exp(1))
        ],
        bottomActions: [
            move(4),
            gain(Status.Stun, adjacentEnemy()),
            exp(1),
            lose()
        ],
        level: 'X'
    },
    {
        id: 129,
        character: 'mindthief',
        name: 'Wretched Creature',
        initiative: 84,
        topActions: [
            summon('Monstrous Rat', [
                hp(4),
                move(3),
                attack(3),
                range(0),
            ]),
            exp(2),
        ],
        bottomActions: [
            move(3),
            consume(Elements.Night, gain(Status.Curse, adjacentEnemy()))
        ],
        level: '2'
    },
    {
        id: 130,
        character: 'mindthief',
        name: 'Hostile Takeover',
        initiative: 9,
        topActions: [
            attack(2),
            range(4),
            gain(Status.Immobilize, target()),
            create(Elements.Ice),
            exp(1)
        ],
        bottomActions: [
            switchSides(3),
            signify(),
            exp(2),
            round(),
            lose()
        ],
        level: '2'
    },
    {
        id: 131,
        character: 'mindthief',
        name: 'Brain Leech',
        initiative: 16,
        topActions: [
            attack(4),
            range(4),
            heal(4, self()),
            create(Elements.Night),
            exp(2),
            lose()
        ],
        bottomActions: [
            attack(1),
            gain(Status.Strengthen, self())
        ],
        level: '3'
    },
    {
        id: 132,
        character: 'mindthief',
        name: 'Silent Scream',
        initiative: 73,
        topActions: [
            augment(melee(), heal(2, range(2))),
            attack(2),
            exp(1)
        ],
        bottomActions: [
            move(2),
            `${push(2)} ${adjacentEnemies('all')}`,
            consume(Elements.Ice, `${push(3)} instead`, exp(1))
        ],
        level: '3'
    },
    {
        id: 133,
        character: 'mindthief',
        name: 'Pilfer',
        initiative: 68,
        topActions: [
            loot(1),
            `Gain one additional money token from the supply for each adjacent enemy`
        ],
        bottomActions: [
            attack(2),
            move(2),
            attack(2),
            exp(2),
            lose()
        ],
        level: '4'
    },
    {
        id: 134,
        character: 'mindthief',
        name: 'Cranium Overload',
        initiative: 5,
        topActions: [
            `Kill one normal enemy within ${range(4)}.`,
            attack(2),
            `${adjacentEnemies('all')} to the killed target`,
            `${exp(1)} for each enemy targeted with this attack.`,
            lose()
        ],
        bottomActions: [
            move(5),
        ],
        level: '4'
    },
    {
        id: 135,
        character: 'mindthief',
        name: 'Mass Hysteria',
        initiative: 12,
        topActions: [
            attack(1),
            range(4),
            targets(4),
            gain(Status.Muddle, target()),
            create(Elements.Ice),
            exp(1)
        ],
        bottomActions: [
            'You may have two Augments active at once.',
            `If a third is played, ${discard()} one of the others`,
            permanent(),
            lose()
        ],
        level: '5'
    },
    {
        id: 136,
        character: 'mindthief',
        name: 'Frozen Mind',
        initiative: 81,
        topActions: [
            augment(melee(), consume(Elements.Ice, gain(Status.Stun, target()))),
            attack(2),
            exp(1)
        ],
        bottomActions: [
            `Force one enemy with ${range(5)} to perform ${move(2)} with you controlling its actions.`
        ],
        level: '5'
    },
    {
        id: 137,
        character: 'mindthief',
        name: 'Corrupting Embrace',
        initiative: 39,
        topActions: [
            attack(1),
            gain(Status.Poison, target()),
            attack(1),
            gain(Status.Muddle, target()),
        ],
        bottomActions: [
            move(4),
            jump(),
            gain(Status.Poison, 'Target all enemies moved through'),
            create(Elements.Night)
        ],
        level: '6'
    },
    {
        id: 138,
        character: 'mindthief',
        name: 'Dark Frenzy',
        initiative: 10,
        topActions: [
            attack(2),
            consume(Elements.Ice, addAttack(2), exp(1)),
            consume(Elements.Night, addAttack(2), exp(1)),
        ],
        bottomActions: [
            move(3),
            attack(3),
            range(3),
            create(Elements.Ice),
            exp(1),
        ],
        level: '6'
    },
    {
        id: 139,
        character: 'mindthief',
        name: 'Vicious Blood',
        initiative: 68,
        topActions: [
            augment(melee(), retaliate(2, self())),
            attack(2),
            exp(1)
        ],
        bottomActions: [
            move(2),
            attack(2),
        ],
        level: '7'
    },
    {
        id: 140,
        character: 'mindthief',
        name: 'Psychic Projection',
        initiative: 92,
        topActions: [
            heal(3, self()),
            shield(1, self(), round()),
            gain(Status.Stun, self())
        ],
        bottomActions: [
            'Your ranged attacks gain the effects of your Augments this round.',
            round(),
            lose()
        ],
        level: '7'
    },
    {
        id: 141,
        character: 'mindthief',
        name: 'Shared Nightmare',
        initiative: 7,
        topActions: [
            attack(3),
            range(4),
            targets(2),
            consume(Elements.Night, gain(Status.Poison, target()), gain(Status.Curse, target())),
            create(Elements.Ice),
            exp(1)
        ],
        bottomActions: [
            move(5),
            consume(Elements.Ice, shield(1, self(), round()), exp(1))
        ],
        level: '8'
    },
    {
        id: 142,
        character: 'mindthief',
        name: 'Domination',
        initiative: 68,
        topActions: [
            `One adjacent ally may perform`,
            attack(4),
            'This attack gains the effects of your Augments.',
            exp(1)
        ],
        bottomActions: [
           `${switchSides(5)}, with you controlling its actions.`,
            signify(),
            exp(2),
            round(),
            lose()
        ],
        level: '8'
    },
    {
        id: 143,
        character: 'mindthief',
        name: 'Many as One',
        initiative: 91,
        topActions: [
            summon('Rat KIng', [
                hp(9),
                move(2),
                attack(NaN),
                range(0),
                `Where NaN is half the rat's current hit point value (rounded up)`
            ]),
            exp(2),
        ],
        bottomActions: [
            `All allies within ${range(2)} ${addAttack(NaN)} to all their attacks, where Nan is equal to the number of allies within ${range(2)} of you`,
            exp(2),
            round(),
            lose()
        ],
        level: '9'
    },
    {
        id: 144,
        character: 'mindthief',
        name: 'Phantasmal Killer',
        initiative: 67,
        topActions: [
            augment(melee(), consume(Elements.Ice, 'Kill one normal target instead')),
            attack(2),
            exp(1)
        ],
        bottomActions: [
            move(2),
            loot(1),
            gain(Status.Invisible, self()),
            create(Elements.Night)
        ],
        level: '9'
    },
];
