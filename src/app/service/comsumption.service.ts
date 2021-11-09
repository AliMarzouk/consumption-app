import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ComsumptionService {
  constructor(private http: HttpClient) {
  }

  getComsumptionByHours(n: any) {
    return this.http.get(environment.API_BASE +'/electricity_consumption', {
      params: {
        n: n,
      }
    });
  }
}
