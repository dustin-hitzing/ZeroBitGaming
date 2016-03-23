namespace ZeroBitGaming.Services {
    export class WordService {
        static $inject = ['DiceService'];
        constructor(private DiceService: ZeroBitGaming.Services.DiceService) {}

        public randomColor() {
            var roll = this.DiceService.roll;
            switch (roll(11)) {
                case 1: return 'white';
                case 2: return 'black';
                case 3: return 'grey';
                case 4: return 'red';
                case 5: return 'orange';
                case 6: return 'yellow';
                case 7: return 'green';
                case 8: return 'blue';
                case 9: return 'indigo';
                case 10: return 'violet';
                case 11: return 'pink';

            }
        }

        public randomMaterial() {
            var roll = this.DiceService.roll;
            switch (roll(19)) {
                case 1: return 'wooden';
                case 2: return 'iron';
                case 3: return 'bone';
                case 4: return 'dragon bone';
                case 5: return 'silver';
                case 6: return 'golden';
                case 7: return 'cold iron';
                case 8: return 'adamantine';
                case 9: return 'emerald';
                case 10: return 'dragon blood';
                case 11: return 'ruby';
                case 12: return 'demon blood';
                case 13: return 'diamond';
                case 14: return 'glass';
                case 15: return 'stained glass';
                case 16: return 'steel';
                case 17: return 'sapphire';
                case 18: return 'bronze';
                case 19: return 'leather';
                case 20: return 'stone';
            }
        }

        public randomWeaponModifiers() {
            var roll = this.DiceService.roll;
            switch (roll(26)) {
                case 1: 'sharpened';
                case 2: 'blessed';
                case 3: 'angel touched';
                case 4: 'epic';
                case 5: 'oversized';
                case 6: 'broken';
                case 7: 'poorly designed';
                case 8: 'fragile';
                case 9: 'heavy';
                case 10: 'cursed';
                case 11: 'unbalanced';
                case 12: 'exploding';
                case 13: 'flaming';
                case 14: 'runic';
                case 15: 'freezing';
                case 16: 'thundering';
                case 17: 'walking';
                case 18: 'tiny';
                case 19: 'talking';
                case 20: 'glowing';
                case 21: 'imaginary';
                case 22: 'slimey';
                case 23: 'ancient';
                case 24: 'standard';
                case 25: 'ugly';
                case 26: 'beautiful';
            }
        }
        public randomLanguage() {
            var roll = this.DiceService.roll;
            switch (roll(10)) {
                case 1: return 'common';
                case 2: return 'elvish';
                case 3: return 'dwarven';
                case 4: return 'gnomish';
                case 5: return 'infernal';
                case 6: return 'draconic';
                case 7: return 'goblin';
                case 8: return 'an unknown language';
                case 9: return 'celestial';
                case 10: return 'abyssil';
            }
        }

        public favoredEnemy() {
            var roll = this.DiceService.roll;
            switch (roll(13)) {
                case 1: return `Constructs`;
                case 2: return `Dragons`;
                case 3: return `Plants`;
                case 4: return `Undead`;
                case 5: return `Goblinoids`;
                case 6: return `Humanoids`;
                case 7: return `Beasts`;
                case 8: return `Insectoids`;
                case 9: return `Outsiders`;
                case 10: return `Abberations`;
                case 11: return `Fey`;
                case 12: return `Elementals`;
                case 13: return `Giants`;
            }
        }

        public elemtalTypes() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return "fire";
                case 2: return "water";
                case 3: return "thunder";
                case 4: return "wind";
                case 5: return "lightning";
            }
        }

        public randomRace() {
            var roll = this.DiceService.roll;
            var color = this.randomColor;
            switch (roll(26)) {
                case 1: return 'goblin';
                case 2: return 'human';
                case 3: return 'hobgoblin';
                case 4: return 'troll';
                case 5: return 'orc';
                case 6: return 'elf';
                case 7: return 'dwarf';
                case 8: return `${color()} dragon`;
                case 9: return 'bear';
                case 10: return 'deer';
                case 11: return 'beaver';
                case 12: return 'giant';
                case 13: return 'squirrel';
                case 14: return 'demon';
                case 15: return 'unicorn';
                case 16: return 'werewolf';
                case 17: return 'gnome';
                case 18: return 'wolf';
                case 19: return 'eagle';
                case 20: return 'goat';
                case 21: return 'sheep';
                case 22: return 'moose';
                case 23: return 'rat';
                case 24: return 'T-rex';
                case 25: return 'triceratops';
                case 26: return 'liopleurodon';


            }
        }
    }
}