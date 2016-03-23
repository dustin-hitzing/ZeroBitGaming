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
                case 5: return `Poison or Purify: You can poison or purify up to a gallon of liquid a day.`;
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

        public evokerTalents() {
            var roll = this.DiceService.roll;
            var ele = this.WordService.elemtalTypes;
            switch (roll(5)) {
                case 1: return `Fireball: for a ball of fire in your hands and shoot it at an enemy for 1d10 damage`;
                case 2: return `Control Water: You can control up to 5 gallons of water at a time; shaping it and freezing it`;
                case 3: return `Thunder Wave: you can clap your hands together and create a wave of sonic energy that deals 1d10 damage to everyone who can hear within 30ft of you`;
                case 4: return `Chain Lightning: you can fire a bolt of lightning that has a 10% chance of bouncing to another target`;
                case 5: return `Flight: you can fly`;
            }
        }

        public paladinTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Smite: You deal 1d20 damage on a melee or ranged attack ${roll(5)} times per day`;
                case 2: return `Healing Hands: You can heal 1d6 damage ${roll(5)} times per day`;
                case 3: return `Create Light: You can create a light and attach it to any object; you may only have one object lit at a time`;
                case 4: return `Divine Favor: You are immune to all diseases, poisons, possession and fear`;
                case 5: return `Crush Undead: You can deal 2d6 damage to one undead within 30ft of you.`;
            }
        }

        public nomadTalents() {
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

        public enchanterTalents() {
            var roll = this.DiceService.roll;
            var mat = this.WordService.randomMaterial;
            switch (roll(5)) {
                case 1: return `Animate: you can give life to small inanimate objects who will do their best to carry out your bidding`;
                case 2: return `Telepathy: you can read the minds of intelligent beings around you and you can send thoughts to them`;
                case 3: return `You can transmute ${mat()} objects into ${mat()} objects`;
                case 4: return `Glitter Dust: you can fire a wave of sparkling dust that blinds enemies and reveals invisible things ${roll(10)} times per day`;
                case 5: return `Blur: you leave a trail of illusions behind you making it hard to hit you. Enemies have a -8 to hit you when this is active`;
            }
        }

        public rogueTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Stalker: you gain a +5 to agility checks to sneak up on someone`;
                case 2: return `Sleight of Hand: You gain a +5 to dexterity checks when trying steal something`;
                case 3: return `Sneak Attack: you gain a +1d10 damage to attacks if an enemy is not aware of your presence`;
                case 4: return `Hide in Plain Sight: ${roll(5)} times per day you may hide in plain sight of someone even if they have already noticed you`;
                case 5: return `Double Attack of Opportunity: Any time you would receive an attack of oportunity you may make 2 attacks instead of one`;
            }
        }

        public bardTalents() {
            var roll = this.DiceService.roll;
            switch (roll(5)) {
                case 1: return `Inspiring Song: you may play a song on an instrument or sing and anyone who can hear you that you choose gains a bonus to all actions equal to your Insight`;
                case 2: return `Bardic Knowledge: +5 to attempts to remember things even if you've never heard of it`;
                case 3: return `Earthshattering Music: with an instrument you may play a song that causes everyone whom you choose to fall prone within 30ft of you ${roll(6)} times per day`;
                case 4: return ``;
                case 5: return ``;
            }
        }
    }
}