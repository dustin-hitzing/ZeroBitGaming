using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ZeroBitGaming.Domain {
    public class Weapon {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Damage { get; set; }
        public int RangeInFeet { get; set; }
        public int Ammo { get; set; }

    }
}