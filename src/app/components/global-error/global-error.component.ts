import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css'],
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorSevice: ErrorService) {}
  ngOnInit(): void {}
}
