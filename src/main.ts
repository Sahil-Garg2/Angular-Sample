import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {SampleTestComponent} from './app/sample-test/sample-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-sample-test> </app-sample-test>
  `,
})
export class App {
  name = 'Sahil';
}

bootstrapApplication(App);
