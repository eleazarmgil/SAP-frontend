import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-landing-base',
  templateUrl: './landing-base.component.html',
  styleUrls: ['./landing-base.component.scss']
})
export class LandingBaseComponent implements OnInit {

  isLoading: boolean = true;

  constructor(private router: Router) {

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });


  }

  ngOnInit(): void {
  }

}
