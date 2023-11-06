import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerfurniture',
  templateUrl: './customerfurniture.component.html',
  styleUrls: ['./customerfurniture.component.css']
})
export class CustomerfurnitureComponent {
  constructor(public route:ActivatedRoute) {}
  ngOnInit(): void {}
}
