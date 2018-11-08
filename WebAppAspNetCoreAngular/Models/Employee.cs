using System;
using System.Collections.Generic;

namespace WebAppAspNetCoreAngular.Models
{
    public partial class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CityId { get; set; }
        public string Department { get; set; }
        public int GenderId { get; set; }

        public City City { get; set; }
        public Gender Gender { get; set; }
    }
}
