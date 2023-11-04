import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-design',
  templateUrl: './furniture-design.component.html',
  styleUrls: ['./furniture-design.component.css']
})
export class FurnitureDesignComponent {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}

}
