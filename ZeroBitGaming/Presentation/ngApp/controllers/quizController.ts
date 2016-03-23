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
        public talent1;
        public talent2;
        public talent3;
        public weapon1;
        public weapon2;

        static $inject = ['$http', 'DiceService', 'ItemService', 'TalentService', 'WeaponService'];

        constructor(private $http: ng.IHttpService, private DiceService: ZeroBitGaming.Services.DiceService, private ItemService: ZeroBitGaming.Services.ItemService, private TalentService: ZeroBitGaming.Services.TalentService, private WeaponService: ZeroBitGaming.Services.TalentService) {
            var gen = DiceService.generateStat;
            var roll = DiceService.roll;
            this.strength = gen();
            this.constitution = gen();
            this.dexterity = gen();
            this.agility = gen();
            this.insight = gen();
            this.willpower = gen();
            this.perception = gen();
            this.hp = roll(10) + 5;
        }
       
        public questionOne(answer) {
            var roll = this.DiceService.roll;
            switch (answer) {
                case 1: return this.strength += roll(4);
                case 2: return this.constitution += roll(4);
                case 3: return this.dexterity += roll(4);
                case 4: return this.agility += roll(4);
                case 5: return this.insight += roll(4);
                case 6: return this.willpower += roll(4);
                case 7: return this.perception += roll(4);
            }
        }

        public questionTwo(answer) {
            var roll = this.DiceService.roll;
            switch (answer) {
                case 1: return this.insight += roll(4);
                case 2: return this.agility += roll(4);
                case 3: return this.constitution += roll(4);
                case 4: return this.willpower += roll(4);
                case 5: return this.strength += roll(4);
                case 6: return this.perception += roll(4);
                case 7: return this.dexterity += roll(4);
            }
        }

        public questionThree(answer) {
            var roll = this.DiceService.roll;
            var tal = this.TalentService;
            switch (answer) {
                case 1: this.talent1 = tal.fighterTalents(); break;
                case 2: this.talent1 = tal.rogueTalents(); break;
                case 3: this.talent1 = tal.rangerTalents(); break;
                case 4: this.talent1 = tal.elementalTalents(); break;
                case 5: this.talent1 = tal.divineTalents(); break;
            }
        }

        public questionFour(answer) {
            var roll = this.DiceService.roll;
            var tal = this.TalentService;
            switch (answer) {
                case 1: this.talent2 = tal.barbarianTalents(); break;
                case 2: this.talent2 = tal.druidTalents(); break;
                case 3: this.talent2 = tal.enchantmentTalents(); break;
                case 4: this.talent2 = tal.bardicTalents(); break;
                
            }
        }

        public questionFive(answer) {
            var roll = this.DiceService.roll;
            var tal = this.TalentService;
            switch (answer) {
                case 1: this.talent3 = tal.necromancyTalents(); break;
                case 2: this.talent3 = tal.conjurationTalents(); break;
                case 3: this.talent3 = tal.transmutationTalents(); break;
                case 4: this.talent3 = tal.monkTalents(); break;

            }
        }


         // Creates a character from all of the saved stats 
        public createCharacter() {
            var player = this.newCharacter(this.strength, this.constitution, this.dexterity, this.agility, this.insight, this.willpower, this.perception, this.hp, this.items, this.talent1, this.talent2, this.talent3, this.weapon1, this.weapon2);
            
            return player;

        }
        // Saves a Character to the database
        public saveCharacter() {
            this.$http.post('/api/quiz', this.createCharacter())
                .then((response) => {
                   
                });
            }


        public newCharacter(strength, constitution, dexterity, agility, insight, willpower, perception, hP, items, talent1, talent2, talent3,  weapon1, weapon2) {
                this.strength = strength,
                this.constitution = constitution,
                this.dexterity = dexterity,
                this.agility = agility,
                this.insight = insight,
                this.willpower = willpower,
                this.perception = perception,
                this.hp = hP,
                this.items = items,
                this.talent1 = talent1,
                this.talent2 = talent2,
                this.talent3 = talent3,
                this.weapon1 = weapon1,
                this.weapon2 = weapon2
        }



    }
}