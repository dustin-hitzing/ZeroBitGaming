namespace ZeroBitGaming.Services {
    export class TalentService {
        static $inject = ["DiceService", "WordService"];
        constructor(private DiceService: ZeroBitGaming.Services.DiceService, private WordService: ZeroBitGaming.Services.WordService) { }

        public fighterTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Improved Armor: All Armor values are increased by +2 for you.`;
                case 2: return `Weapon Master: You gain a +2 bonus to attack with all weapons.`;
                case 3: return `Power Attack: You deal +3 damage with all strength based attacks`;
                case 4: return `Sheild Master: Sheilds block 1d10 damage instead of 1d6`;
                case 5: return `Auto-Parry: Parry any physical attack automatically ${roll(5)} per day`;
            }
        }

        public monkTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Martial Arts: Your unarmed attacks deal leathal damage instead of non-leathal`;
                case 2: return `Like the Wind: You are fast; your running speed is ${roll(4)+1} times normal; ${roll(5)} per day you can move so fast you vanish from sight`;
                case 3: return `Flurry of Blows: You may make ${roll(10) + 1} melee attacks per round instead of the normal 1 attack; if you do this each attack has a -5 penalty`;
                case 4: return `Up the Walls: You may run up walls without making any sort of check at a rate equal to your speed`;
                case 5: return `Quivering Palm: You may make an unarmed attack ${roll(5)} per week and if successful the target will must make a constitution save or die instantly at a time of your choosing up to 1 week later.`;
            }
        }

        public rangerTalents() {
            var roll = this.DiceService.roll;
            var enemy = this.WordService.favoredEnemy;
            switch (roll(5)) {
                case 1: return `Multi-Shot: you may fire multiple arrows at once to hit targets no more than a foot away from each other and within your eyesight; There is no additional penalty to these shots`;
                case 2: return `Rapid fire: you may make two ranged attacks in rapid succession with no penalty`;
                case 3: return `Point Blank Shot: Any ranged attack made within 30ft of a target deals +3 damage`;
                case 4: return `Heavy Dual Weilding: You can dual weild heavy weapons with no penalty`;
                case 5: return `Favored Enemy: Deal double damage when fighting against ${enemy()}`;
            }
        }

        public druidTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Talk with Nature: You can talk with animals and plants`;
                case 2: return `Control Weather: You can change the weather in one area upto 20 miles by concentrating for 15 minutes`;
                case 3: return `Shapeshift: you may take the form of any non-magical beast that you have seen`;
                case 4: return `One with the Sun: You heal +5 points of damage for every hour in direct sunlight; even regrowing lost limbs; this power does not work if you are dead.`;
                case 5: return `Poison or Purify: You can poison or purify up to a gallon of water a day.`;
            }
        }

        public barbarianTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Natural Armor: Your skin is really tough; You block ${roll(5)} points of physical damage naturally`;
                case 2: return `Berserker Rage: ${roll(5)} per day you may enter a blinding rage; You become immune to the effects of damage while raging; you deal +5 damage on all melee attacks`;
                case 3: return `Everything is a Weapon: You may fight with anything you can hold with no penalties`;
                case 4: return `Iron Stomach: You may consume anything you can chew for food with no adverse effects`;
                case 5: return `Improved Grapple: You get a +5 to grappling opponents.`;
            }
        }

        public necromancyTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Raise Dead: You may raise the dead around you to serve you as zombies. You may have ${roll(5)} zombie servants at a time.`;
                case 2: return `Withering Touch: ${roll(3)} you may touch someone and reduce their constitution or strength by 1d6`;
                case 3: return `Astral Projection: Leave your body as a ghost`;
                case 4: return `Death: Kill anything that you know the TrueName of`;
                case 5: return `Cold Heart: Immune to cold damage and extreme cold temeratures`;
            }
        }

        public elementalTalents() {
            var roll = this.DiceService.roll;
            var ele = this.WordService.elemtalTypes;
            switch (roll(5)) {
                case 1: var ment = ele();
                    return `Ball of ${ment}: Creates a ball of 1d10 ${ment} damage that can be thrown at targets`;
                case 2: return `Elemental Immunity: Immune to the effects of ${ele()} damage`;
                case 3: var ment = ele();
                    return `Wall of ${ment}: Creates a wall made of ${ment} that can be in a straight line of 50ft or in a circle ${roll(5)} times per day`;
                case 4: var ment = ele();
                    return `Sheath of ${ment}: Surrounds your person in ${ment}; you deal 1d6 damage of this elements type`;
                case 5: var ment = ele();
                    return `Absorb ${ment}: If you are hit with an attack made of this element you have a chance of healing 1d6 damage`;
            }
        }

        public divineTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Smite: You deal 1d20 damage on a melee or ranged attack ${roll(5)} times per day`;
                case 2: return `Healing Hands: You can heal 1d6 damage ${roll(5)} times per day`;
                case 3: return `Create Light: You can create a light and attach it to any object; you may only have one object lit at a time`;
                case 4: return `Divine Favor: You are immune to all diseases, poisons, possession and fear`;
                case 5: return `Crush Undead: You can deal 2d6 damage to one undead within 30ft of you.`;
            }
        }

        public conjurationTalents() {
            var roll = this.DiceService.roll;
            var race = this.WordService.randomRace;
            switch (roll(5)) {
                case 1: return `Summon ${race()}: Summons a the specified creature to fight for you for 30 seconds ${roll(5)} times per day`;
                case 2: return `Banish: Banish any target to another plane of existence for 1 day`;
                case 3: return `Teleport: Teleport to any place you can see or remember`;
                case 4: return `Summon Weapon: Summons a weapon of this type`;
                case 5: return `Summon Friends: Allows you to mark people, creatures and items and summon them to your location; you may mark up to ${roll(5)} things`;
            }
        }

        public transmutationTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Polymorph: you can transform into any object or creature that you've seen.`;
                case 2: return ``;
                case 3: return ``;
                case 4: return ``;
                case 5: return ``;
            }
        }

        public enchantmentTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return ``;
                case 2: return ``;
                case 3: return ``;
                case 4: return ``;
                case 5: return ``;
            }
        }

        public rogueTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return ``;
                case 2: return ``;
                case 3: return ``;
                case 4: return ``;
                case 5: return ``;
            }
        }

        public bardicTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return ``;
                case 2: return ``;
                case 3: return ``;
                case 4: return ``;
                case 5: return ``;
            }
        }
    }
}