import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furnituretype',
  templateUrl: './furnituretype.component.html',
  styleUrls: ['./furnituretype.component.css']
})
export class FurnituretypeComponent {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}

}
