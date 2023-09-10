import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { IData } from '../models/data';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  searchCountry(): Observable<IData[]> {
    return this.http
      .get<IData[]>(
        'https://restcountries.com/v3.1/independent?status=true&fields=name,capital,flag',
        {
          params: new HttpParams({
            fromObject: { limit: 5 },
          }),
        }
      )
      .pipe(delay(2000), catchError(this.errorHandler.bind(this)));
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
