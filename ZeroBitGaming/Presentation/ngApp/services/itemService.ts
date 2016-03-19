namespace ZeroBitGaming.Services {
    export class ItemService {

        static $inject = ['DiceSerivce']

        constructor(private DiceService: ZeroBitGaming.Services.DiceService) { }

        public regularItems() {
            switch (this.DiceService.roll(100)) {
                case 1: return `${this.DiceService.roll(500)}ft of Rope`;
                case 2: return `${this.DiceService.roll(3)} minor healing potion(s)`;
                case 3: return `${this.DiceService.roll(3)} major healing potion(s)`;
                case 4: return `${this.DiceService.roll(1000)} marbles`;
                case 5: return `Leather Coin Purse`;
                case 6: return `${this.DiceService.roll(3)} vile(s) of poison`;
                case 7: return `${this.DiceService.roll(10)} cask(s) of wine`;
                case 8: return `${this.DiceService.roll(10)} match(es)`;
                case 9: return `A 10ft pole`;
                case 10: return `${this.DiceService.roll(5)} loaves of bread`;
                case 11: return `A pair of Iron Shackles`;
                case 12: return `A medical kit`;
                case 13: return `${this.DiceService.roll(20)} lockpick(s)`;
                case 14: return `A ${this.DiceService.roll(500)} ft long grappling hook`;
                case 15: return ``;
                case 16: return ``;
                case 17: return ``;
                case 18: return ``;
                case 19: return ``;
                case 20: return ``;
                case 21: return ``;
                case 22: return ``;
                case 23: return ``;
                case 24: return ``;
                case 25: return ``;
                case 26: return ``;
                case 27: return ``;
                case 28: return ``;
                case 29: return ``;
                case 30: return ``;
                case 31: return ``;
                case 32: return ``;
                case 33: return ``;
                case 34: return ``;
                case 35: return ``;
                case 36: return ``;
                case 37: return ``;
                case 38: return ``;
                case 39: return ``;
                case 40: return ``;
                case 41: return ``;
                case 42: return ``;
                case 43: return ``;
                case 44: return ``;
                case 45: return ``;
                case 46: return ``;
                case 47: return ``;
                case 48: return ``;
                case 49: return ``;
                case 50: return ``;
                case 51: return ``;
                case 52: return ``;
                case 53: return ``;
                case 54: return ``;
                case 55: return ``;
                case 56: return ``;
                case 57: return ``;
                case 58: return ``;
                case 59: return ``;
                case 60: return ``;
                case 61: return ``;
                case 62: return ``;
                case 63: return ``;
                case 64: return ``;
                case 65: return ``;
                case 66: return ``;
                case 67: return ``;
                case 68: return ``;
                case 69: return ``;
                case 70: return ``;
                case 71: return ``;
                case 72: return ``;
                case 73: return ``;
                case 74: return ``;
                case 75: return ``;
                case 76: return ``;
                case 77: return ``;
                case 78: return ``;
                case 79: return ``;
                case 80: return ``;
                case 81: return ``;
                case 82: return ``;
                case 83: return ``;
                case 84: return ``;
                case 85: return ``;
                case 86: return ``;
                case 87: return ``;
                case 88: return ``;
                case 89: return ``;
                case 90: return ``;
                case 91: return ``;
                case 92: return ``;
                case 93: return ``;
                case 94: return ``;
                case 95: return ``;
                case 96: return ``;
                case 97: return ``;
                case 98: return ``;
                case 99: return ``;
                case 100: return ``;
            }
        }
    }
}