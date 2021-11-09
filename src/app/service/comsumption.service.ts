import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComsumptionService {
  constructor(private http: HttpClient) {
  }

  getComsumptionByHours(n: any) {
    return this.http.get('http://localhost:5000/electricity_consumption', {
      params: {
        n: n,
      }
    });
  }
}
