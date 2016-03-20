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
        public weapons = [];

        static $inject = ['$http', 'DiceService', 'ItemService'];

        constructor(private $http: ng.IHttpService, private DiceService: ZeroBitGaming.Services.DiceService, private ItemService: ZeroBitGaming.Services.ItemService) {
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
            switch (answer) {
                
            }
        }

         // Creates a character from all of the saved stats 
        public createCharacter() {
            var player = this.newCharacter(this.strength, this.constitution, this.dexterity, this.agility, this.insight, this.willpower, this.perception, this.hp, this.items, this.talents, this.weapons);
            
            return player;

        }
        // Saves a Character to the database
        public saveCharacter() {
            this.$http.post('/api/quiz', this.createCharacter())
                .then((response) => {
                   
                });
            }


        public newCharacter(strength, constitution, dexterity, agility, insight, willpower, perception, hP, items, talents,  weapons) {
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
                this.weapons = weapons
        }



    }
}