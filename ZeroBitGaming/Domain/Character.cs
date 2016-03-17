using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ZeroBitGaming.Domain {
    public class Character {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Constitution { get; set; }
        public int Dexterity { get; set; }
        public int Agility { get; set; }
        public int Insight { get; set; }
        public int Willpower { get; set; }
        public int Perception { get; set; }

        public int HP { get; set; }

        public IList<Talent> Talents { get; set; }
        public IList<Spell> Spells { get; set; }
        public IList<Item> Items { get; set; }
        public IList<Weapon> Weapons { get; set; }

    }
}