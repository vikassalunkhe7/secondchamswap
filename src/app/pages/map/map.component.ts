import { Component, OnInit } from "@angular/core";
import $ from 'jquery';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}

@Component({
  selector: "app-map",
  templateUrl: "map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    $(".question").click(function(){ 
      //console.log("click click!");
      $(this).toggleClass("question-active");
      $(this).next().slideToggle(700);
      $(this).children("img.arrow").toggleClass("arrow-active");
  });

    $(document).ready(function() {
      $('.tabs .tab-links a').on('click', function(e)  {
          var currentAttrValue = $(this).attr('href');
   
          // Show/Hide Tabs
          $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
          // Change/remove current tab to active
          $(this).parent('li').addClass('active').siblings().removeClass('active');
   
          e.preventDefault();
          
          
      });
  });
  }
  
}
