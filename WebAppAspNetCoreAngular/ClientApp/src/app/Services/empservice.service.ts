
    import {   Injectable, Inject  } from '@angular/core';  
  import { Http, Response } from '@angular/http';  
  import { Observable  } from 'rxjs/Observable';  
  import {  Router } from '@angular/router';  
  import 'rxjs/add/operator/map';  
  import 'rxjs/add/operator/catch';  
  import 'rxjs/add/observable/throw';  
  @Injectable()  
  export class EmpserviceService {  
      myAppUrl: string = "";  
      constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {  
          this.myAppUrl = baseUrl;  
      }  
      getCityList() {  
          var result= this._http.get(this.myAppUrl + 'api/Employee/GetCity').map(res => res.json()).catch(this.errorHandler);  
          return result;
      }  
      getGenderList(){
        var result= this._http.get(this.myAppUrl + 'api/Employee/GetGender').map(res => res.json()).catch(this.errorHandler);  
        return result;
      }
      getEmployees() {  
          var result= this._http.get(this.myAppUrl + 'api/Employee/Index').map((response: Response) => response.json()).catch(this.errorHandler);  
          return result;
      }  
      getEmployeeById(id: number) {  
          var result= this._http.get(this.myAppUrl + "api/Employee/Details/" + id).map((response: Response) => response.json()).catch(this.errorHandler)  
          return result;
      }  
      saveEmployee(employee) {  
          var result= this._http.post(this.myAppUrl + 'api/Employee/Create', employee).map((response: Response) => response.json()).catch(this.errorHandler)  
          return result;
      }  
      updateEmployee(employee) {  
          var result= this._http.put(this.myAppUrl + 'api/Employee/Edit', employee).map((response: Response) => response.json()).catch(this.errorHandler);  
          return result;
      }  
      deleteEmployee(id) {  
          var result = this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id).map((response: Response) => response.json()).catch(this.errorHandler);  
          return result;
      }  
      errorHandler(error: Response) {  
          console.log(error);  
          return Observable.throw(error);  
      }  
  }  
