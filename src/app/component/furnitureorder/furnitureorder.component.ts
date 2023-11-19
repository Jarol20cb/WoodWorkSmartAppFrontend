import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furnitureorder',
  templateUrl: './furnitureorder.component.html',
  styleUrls: ['./furnitureorder.component.css']
})
export class FurnitureorderComponent {
  constructor(public route:ActivatedRoute) {}
  ngOnInit(): void {}

}
