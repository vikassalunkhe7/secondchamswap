import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
declare var jQuery: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
   "use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
  if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
  slider.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth"
  });
}

// Auto slider
let timerId = setInterval(scrollRight, 7000);

/**
 * @brief Reset timer for scrolling right
 */
function resetTimer() {
  clearInterval(timerId);
  timerId = setInterval(scrollRight, 7000);
}

// Scroll Events
slider.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
    resetTimer();
  }
});

slider.addEventListener("click", function (ev) {
  if (ev.target === rightArrow) {
    scrollRight();
    resetTimer();
  }
});

  }

 
 
}
