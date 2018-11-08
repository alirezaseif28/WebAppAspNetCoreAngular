using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAspNetCoreAngular.Models.ViewModel
{
    public class EmployeeDataViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public int GenderId { get; set; }
        public int CityId { get; set; }
    }
}
