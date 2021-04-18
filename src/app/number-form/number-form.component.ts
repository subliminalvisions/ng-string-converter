import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.less']
})
export class NumberFormComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  stringValue: string = ''; 
  YearlyNumString: number; 
  hourlyInput: number; 
  // stringConverted: string = ''; 
  slugCaseString: string = ''; 
  titleCaseString: string = ''; 
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.YearlyNumString = 0;
    this.hourlyInput = 0;
    this.buildForm();
    // this.setUserCategoryValidators();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      // username: [null, [Validators.required]],

      hourlyInput: [null],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    // YearlyNumString: number; 
    // hourlyInput: number; 
    this.YearlyNumString = this.hourlyToYearly(this.form.value.hourlyInput);
    // this.titleCaseString = this.titleCase(this.form.value.stringinput);

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
    }
  }
  hourlyToYearly(num) {
    return (num * 40 * 50);
  }

  yearlyToHourly(num) {}


}
