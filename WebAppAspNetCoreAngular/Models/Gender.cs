﻿using System;
using System.Collections.Generic;

namespace WebAppAspNetCoreAngular.Models
{
    public partial class Gender
    {
        public Gender()
        {
            Employee = new HashSet<Employee>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Employee> Employee { get; set; }
    }
}
