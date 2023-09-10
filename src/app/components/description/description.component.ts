import { Component, Input } from '@angular/core';
import { IData } from 'src/app/models/data';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
})
export class DescriptionComponent {
  @Input() data: IData;
}
