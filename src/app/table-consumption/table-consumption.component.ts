import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-table-consumption',
  templateUrl: './table-consumption.component.html',
  styleUrls: ['./table-consumption.component.scss']
})
export class TableConsumptionComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'value'];
  @Input()
  dataSource: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
