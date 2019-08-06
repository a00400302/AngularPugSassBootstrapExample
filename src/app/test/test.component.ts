import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.pug',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  title = 'AngularPugSassBootstrapExample';
  constructor() { }

  ngOnInit() {
  }

}
