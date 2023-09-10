import { Component, OnInit } from '@angular/core';
import { IData } from './models/data';
import { data } from './data/data';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Мій API-клієнт';

  data: IData[] = [];
  loading = false;
  details = false;
  data$: Observable<IData[]>;
  term = '';

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.loading = true;
    this.data$ = this.productsService
      .searchCountry()
      .pipe(tap(() => (this.loading = false)));
  }
}
