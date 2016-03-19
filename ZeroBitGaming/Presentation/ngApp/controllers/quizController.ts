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

        static $inject = ['$http', 'DiceService'];

        constructor(private $http: ng.IHttpService, private DiceService: ZeroBitGaming.Services.DiceService) {
            
        }
       
         // Creates a character from all of the saved stats 
        public createCharacter() {
            var player = this.newCharacter(this.strength, this.constitution, this.dexterity, this.agility, this.insight, this.willpower, this.perception, this.hp, this.items, this.talents, this.spells, this.weapons);
            
            return player;

        }
        // Saves a Character to the database
        public saveCharacter() {
            this.$http.post('/api/quiz', this.createCharacter())
                .then((response) => {
                   
                });
            }
        
       

        public questionOne(answer) {
            switch (answer) {
                
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