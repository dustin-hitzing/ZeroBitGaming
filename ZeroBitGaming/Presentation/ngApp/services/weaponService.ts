namespace ZeroBitGaming.Services {
    export class WeaponService {
        static $inject = ['DiceService'];
        constructor(private DiceService: ZeroBitGaming.Services.DiceService) { }

        public weaponMaterial() {
            var roll = this.DiceService.roll;
            var mat = roll(100);
            if (mat === 1) {
                switch (roll(3)) {
                    case 1: return `adamantine`;
                    case 2: return `dragon blood`;
                    case 3: return `demon blood`;
                }
            }
            else if (mat <= 20) {
                switch (roll(7)) {
                    case 1: return `steel`;
                    case 2: return `ruby`;
                    case 3: return `emerald`;
                    case 4: return `sapphire`;
                    case 5: return `silver`;
                    case 6: return `golden`;
                    case 7: return `dragon-bone`;
                    case 8: return `diamond`;
                }

            }
            else if (mat >= 21 && mat <= 95) {
                switch (roll(3)) {
                    case 1: return `iron`;
                    case 2: return `cold iron`;
                    case 3: return `bronze`;
                    case 4: return `bone`;
                }
            }
            else {
                switch (roll(6)) {
                    case 1: return `glass`;
                    case 2: return `stained glass`;
                    case 3: return `wooden`;
                    case 4: return `stone`;
                    case 5: return `leather`;
                    case 6: return `cloth`;
                }
            }
            }
        

        public randomMelee() {
            var roll = this.DiceService.roll;
            var mat = this.weaponMaterial;
            switch (roll(14)) {
                case 1: return `${mat()} longsword`;
                case 2: return `${mat()} shortsword`;
                case 3: return `${mat()} greatsword`;
                case 4: return `${mat()} greataxe`;
                case 5: return `${mat()} handaxe`;
                case 6: return `${mat()} spiked chain`;
                case 7: return `${mat()} spear`;
                case 8: return `${mat()} club`;
                case 9: return `${mat()} halberd`;
                case 10: return `${mat()} flail`;
                case 11: return `${mat()} whip`;
                case 12: return `${mat()} mace`;
                case 13: return `${mat()} morningstar`;
                case 14: return `${mat()} rapier`;
                
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