using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ZeroBitGaming.Domain {
    public class Spell {
       
        public int Id { get; set; }
        public int Charges { get; set; }
        public bool Volitile { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Duration { get; set; }
        public string Damage { get; set; }

    }
}