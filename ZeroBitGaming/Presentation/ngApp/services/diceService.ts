namespace ZeroBitGaming.Services {
    export class DiceService {
        // Rolls a die with the number of sides equal to the arguement passed in
        angular.module('ZeroBitGaming').service('DiceService', DiceService);

        public roll(num) {
            return Math.floor((Math.random() * num) + 1);
        }

        // Returns a recursive roll for stats that checks if the die is 6 or more and then re-rolls
        public recursiveRoll() {
            var roll = this.roll(6);
            var newRoll;
            if (roll < 6) {
                return newRoll + roll;
            } else {
                newRoll += roll;
                this.recursiveRoll();
            }
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
                specialy = ((special - 10) / 2) + this.roll(10);
                return specialy;
            } else if (s <= 50) {
                special = this.recursiveRoll();
                return (special - 10) / 2;
            } else {
                return this.generateAverage();
            }
        }

        public generateStat() {
            var weak = this.generateWeak;
            var avg = this.generateAverage;
            var strong = this.generateStrong;
            var epic = this.generateEpic;
            var spec = this.generateSpecial;
            var rec = this.recursiveRoll;

            var make = this.roll(100)
            if (make == 1) {
                return epic();
            } else if (make <= 20) {
                return strong();
            } else if (make >= 21 && make <= 80) {
                return avg();
            } else if (make >= 81 && make <= 99) {
                return spec();
            } else {
                return rec();
            }
        }
    }
}