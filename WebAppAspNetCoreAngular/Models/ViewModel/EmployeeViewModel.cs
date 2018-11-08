using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAspNetCoreAngular.Models.ViewModel
{
    public class EmployeeViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string GenderName { get; set; }
        public string CityName { get; set; }
        public string Department { get; set; }
    }
}
