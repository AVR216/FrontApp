import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/Person.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  list!: Person[];

  constructor(private ps: PersonService) { }

  ngOnInit(): void {
    this.ps.getPersons().subscribe(resp => {
      this.list = resp;
    })
  }

}
