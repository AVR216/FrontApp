import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {


  personForm = this.fb.group({
    name: [''],
    gender: [''],
    age: [''],
    eyeColor: [''],
    balance: [''],
    tags: [''],
    greeting: [],
    favoriteFruit: []
  });

  constructor(private fb: FormBuilder, private ps: PersonService) {

  }

  ngOnInit(): void {
    this.ps.getPersons().subscribe(resp => console.log(resp));
  }

  onSubmit(){
    console.log(this.personForm.value);
    this.ps.registerPerson(this.personForm.value).subscribe(resp => {
      console.log(resp);
    })
  }
}
