import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit(): void {

    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $("#navbarCollapse").is(":visible");
      if (toggle) {
        $("#navbarCollapse").collapse('hide');
      }
    });
    
  }
}
