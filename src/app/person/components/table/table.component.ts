import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/Person.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  @Input() list! : Person [];

  constructor() { }

  ngOnInit(): void {
  }

}
