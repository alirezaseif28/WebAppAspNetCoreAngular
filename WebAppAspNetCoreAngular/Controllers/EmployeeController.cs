using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppAspNetCoreAngular.Models;
using WebAppAspNetCoreAngular.Models.ViewModel;

namespace WebAppAspNetCoreAngular.Controllers
{
   
    public class EmployeeController : Controller
    {
        EmployeeDataAccessLayer objemployee = new EmployeeDataAccessLayer();
        // GET: api/<controller>
        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<EmployeeViewModel> Get()
        {
            return objemployee.GetAllEmployee();
        }

        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create([FromBody] EmployeeDataViewModel employee)
        {
            return objemployee.AddEmployee(employee);
        }
        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public EmployeeDataViewModel Details(int id)
        {
            return objemployee.GetEmployeeData(id);
        }
        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit([FromBody] EmployeeDataViewModel employee)
        {
            return objemployee.UpdateEmployee(employee);
        }
        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return objemployee.DeleteEmployee(id);
        }
        [HttpGet]
        [Route("api/Employee/GetCity")]
        public IEnumerable<City> GetCity()
        {
            return objemployee.GetCity();
        }
        [HttpGet]
        [Route("api/Employee/GetGender")]
        public IEnumerable<Gender> GetGender()
        {
            return objemployee.GetGender();
        }
    }
}
