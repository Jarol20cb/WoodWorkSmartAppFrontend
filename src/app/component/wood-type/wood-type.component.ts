import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wood-type',
  templateUrl: './wood-type.component.html',
  styleUrls: ['./wood-type.component.css']
})
export class WoodTypeComponent {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
