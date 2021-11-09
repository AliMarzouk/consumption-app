import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ComsumptionService} from "./service/comsumption.service";

const ELEMENT_DATA: any[] = [
  {date: '10/11/1998', time: '20:30', value: 1.0079},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any[] = ELEMENT_DATA;
  n: number | null = 0;
  hoursFormControl = new FormControl(0, [Validators.min(0)]);

  constructor(private consumService: ComsumptionService) {
  }

  refresh() {
    this.consumService.getComsumptionByHours(this.n)
      .subscribe(resp => {
        this.data = [];
        const keys = Object.keys(resp);
        const values = Object.values(resp);
        for (let i = 0; i < keys.length; i++) {
          let date: any = keys[i].split('T');
          const time = date[1]
          date = date[0]
          const value = values[i];
          this.data.push({date, time, value})
        }
      })
  }
}
