import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import $ from 'jquery';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html",
  styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {


  constructor() {}



  ngOnInit() {

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
