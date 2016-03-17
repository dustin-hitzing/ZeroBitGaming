namespace ZeroBitGaming.Controllers {
    export class QuizController {
        public strength;
        public constitution;
        public dexterity;
        public agility;
        public insight;
        public willpower;
        public perception;
        public hp;
        public items = [];
        public talents = [];
        public spells = [];
        public weapons = [];


        public roll(num) {
            return Math.floor((Math.random() * num) + 1);
        }

        public generateWeak() {
            var weak = this.roll(6) + this.roll(6) + this.roll(6);
            var weaky = ((weak - 10) / 2) - 2;
            return weaky;
        }

        public generateAverage() {
            var average = this.roll(6) + this.roll(6) + this.roll(6);
            var averagey = (average - 10) / 2;
            return averagey;
        }

        public generateStrong() {
            var strong = this.roll(6) + this.roll(6) + this.roll(6);
            var strongy = ((strong - 10) / 2) + 2;
        }

        public generateEpic() {
            var epic = this.roll(6) + this.roll(6) + this.roll(6);
            var epicy = (epic / 2) + 2;
        }

        public generateSpecial() {
            var s = this.roll(100);
            var special;
            var specialy;
            if (s <= 1) {
                special = this.roll(6) + this.roll(6) + this.roll(6) + this.roll(6) + this.roll(6);
                specialy = (special - 10) / 2;
                return specialy;
            } else if (s <= 20) {
                special = this.roll(6) + this.roll(6) + this.roll(6);
                specialy = 
            }
        }

        public newCharacter(strength, constitution, dexterity, agility, insight, willpower, perception, hP, items, talents, spells, weapons) {
            this.strength = strength,
                this.constitution = constitution,
                this.dexterity = dexterity,
                this.agility = agility,
                this.insight = insight,
                this.willpower = willpower,
                this.perception = perception,
                this.hp = hP,
                this.items = items,
                this.talents = talents,
                this.spells = spells,
                this.weapons = weapons
        }



    }
}