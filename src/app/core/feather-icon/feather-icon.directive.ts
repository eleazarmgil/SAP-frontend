import { Directive, AfterViewInit } from '@angular/core';
import * as feather from 'node_modules/@types/feather-icons/index';

@Directive({
  selector: '[appFeatherIcon]'
})
export class FeatherIconDirective implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

}
