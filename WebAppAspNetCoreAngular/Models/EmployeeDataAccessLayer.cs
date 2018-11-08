using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppAspNetCoreAngular.Models.ViewModel;

namespace WebAppAspNetCoreAngular.Models
{
    public class EmployeeDataAccessLayer
    {
        EmployeeContext db = new EmployeeContext();
        public IEnumerable<EmployeeViewModel> GetAllEmployee()
        {
            try
            {
                var result = (from employee in db.Employee
                              join city in db.City on employee.CityId equals city.Id
                              join gender in db.Gender on employee.GenderId equals gender.Id
                              select new EmployeeViewModel()
                              {
                                  Id = employee.Id,
                                  Name = employee.Name,
                                  Department = employee.Department,
                                  CityName = city.Name,
                                  GenderName = gender.Name
                              }).ToList();
                return result;
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record  
        public int AddEmployee(EmployeeDataViewModel model)
        {
            try
            {
                var employee = new Employee() { Id = model.Id, Name = model.Name, Department = model.Department, GenderId = model.GenderId, CityId = model.CityId };
                db.Employee.Add(employee);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar employee  
        public int UpdateEmployee(EmployeeDataViewModel model)
        {
            try
            {
                var employee = new Employee() { Id = model.Id, Name = model.Name, Department = model.Department, GenderId = model.GenderId, CityId = model.CityId };
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular employee  
        public EmployeeDataViewModel GetEmployeeData(int id)
        {
            try
            {
                EmployeeDataViewModel employee = db.Employee.Where(x => x.Id == id).Select(x => new EmployeeDataViewModel()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Department = x.Department,
                    CityId = x.CityId,
                    GenderId = x.GenderId
                }).SingleOrDefault();
                return employee;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular employee  
        public int DeleteEmployee(int id)
        {
            try
            {
                Employee emp = db.Employee.Find(id);
                db.Employee.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Get the list of City  
        public List<City> GetCity()
        {
            List<City> lstCity = db.City.ToList();
            return lstCity;
        }
        //To Get the list of Gender  
        public List<Gender> GetGender()
        {
            List<Gender> lstGender = db.Gender.ToList();
            return lstGender;
        }
    }
}
