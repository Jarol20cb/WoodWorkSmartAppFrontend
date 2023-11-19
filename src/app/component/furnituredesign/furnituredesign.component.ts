import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furnituredesign',
  templateUrl: './furnituredesign.component.html',
  styleUrls: ['./furnituredesign.component.css']
})
export class FurnituredesignComponent {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
