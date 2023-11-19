import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carpenter',
  templateUrl: './carpenter.component.html',
  styleUrls: ['./carpenter.component.css']
})
export class CarpenterComponent {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
