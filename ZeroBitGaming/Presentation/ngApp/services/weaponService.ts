namespace ZeroBitGaming.Services {
    export class WeaponService {
        static $inject = ['DiceService'];
        constructor(private DiceService: ZeroBitGaming.Services.DiceService) { }


        public randomMelee() {
            var roll = this.DiceService.roll;
            switch (roll(14)) {
                case 1: return `longsword`;
                case 2: return `shortsword`;
                case 3: return `greatsword`;
                case 4: return `greataxe`;
                case 5: return `handaxe`;
                case 6: return `spiked chain`;
                case 7: return `spear`;
                case 8: return `club`;
                case 9: return `halberd`;
                case 10: return `flail`;
                case 11: return `whip`;
                case 12: return `mace`;
                case 13: return `morningstar`;
                case 14: return `rapier`;
                
            }
        }

        public randomRanged() {
            var roll = this.DiceService.roll;
            switch (roll(6)) {
                case 1: return `longbow with ${roll(50)} arrows`;
                case 2: return `shortbow with ${roll(50)} arrows`;
                case 3: return `crossbow with ${roll(50)} arrows`;
                case 4: return `${roll(30)} javalins`;
                case 5: return `${roll(10)} throwing knives`;
                case 6: return `slingshot with ${roll(100)} shots`;
            }
        }
    }
}