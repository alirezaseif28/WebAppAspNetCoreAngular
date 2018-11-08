
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetch-employee/fetch-employee.component';
import { EmpserviceService } from '../../services/empservice.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;
  cityList: Array<any> = [];
  genderList: Array<any> = [];
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService: EmpserviceService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.employeeForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      genderId: ['', [Validators.required]],
      department: ['', [Validators.required]],
      cityId: ['', [Validators.required]]
    })
  }
  ngOnInit() {
    this._employeeService.getCityList().subscribe(data => this.cityList = data);
   
    this._employeeService.getGenderList().subscribe(data => this.genderList = data);
   
    if (this.id > 0) {
      this.title = "Edit";
      this._employeeService.getEmployeeById(this.id).subscribe(resp => this.employeeForm.setValue(resp), error => this.errorMessage = error);
    }
  }
  save() {
    if (!this.employeeForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._employeeService.saveEmployee(this.employeeForm.value).subscribe((data) => {
        this._router.navigate(['/fetch-employee']);
      }, error => this.errorMessage = error)
    } else if (this.title == "Edit") {
      this._employeeService.updateEmployee(this.employeeForm.value).subscribe((data) => {
        this._router.navigate(['/fetch-employee']);
      }, error => this.errorMessage = error)
    }
  }
  cancel() {
    this._router.navigate(['/fetch-employee']);
  }
  get name() {
    return this.employeeForm.get('name');
  }
  get genderId() {
    return this.employeeForm.get('genderId');
  }
  get department() {
    return this.employeeForm.get('department');
  }
  get cityId() {
    return this.employeeForm.get('cityId');
  }
}  
