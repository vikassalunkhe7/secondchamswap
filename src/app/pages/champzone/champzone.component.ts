import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-champzone',
  templateUrl: './champzone.component.html',
  styleUrls: ['./champzone.component.scss']
})
export class ChampzoneComponent implements OnInit {

  constructor() { }


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
