﻿using ZeroBitGaming.Domain;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ZeroBitGaming.Infrastructure {
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser> {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false) {
        }

        public static ApplicationDbContext Create() {
            return new ApplicationDbContext();
        }

        public IDbSet<Character> Characters { get; set; }
        public IDbSet<Item> Items { get; set; }
        public IDbSet<Spell> Spells { get; set; }
        public IDbSet<Talent> Talents { get; set; }
        public IDbSet<Weapon> Weapons { get; set; }

    }
}