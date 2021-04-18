import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-text-string-form',
  templateUrl: './text-string-form.component.html',
  styleUrls: ['./text-string-form.component.less']
})
export class TextStringFormComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  stringValue: string = ''; 
  // stringConverted: string = ''; 
  slugCaseString: string = ''; 
  titleCaseString: string = ''; 
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.stringConverted = 'empty';
    this.buildForm();
    // this.setUserCategoryValidators();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      // username: [null, [Validators.required]],

      stringinput: [null],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    this.slugCaseString = this.convert_string_to_slug(this.form.value.stringinput);
    this.titleCaseString = this.titleCase(this.form.value.stringinput);

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
    }
  }

  convert_string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

}
