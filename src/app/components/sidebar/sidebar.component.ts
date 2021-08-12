import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Home",
    rtlTitle: "لوحة القيادة",
    icon: "icon-istanbul",
    class: ""
  },
  {
    path: "/icons",
    title: "Exachange",
    rtlTitle: "الرموز",
    icon: "icon-refresh-02",
    class: ""
  },
  {
    path: "/maps",
    title: "Farms",
    rtlTitle: "خرائط",
    icon: "icon-delivery-fast",
    class: "" },
  {
    path: "/notifications",
    title: "Pools",
    rtlTitle: "إخطارات",
    icon: "icon-link-72",
    class: ""
  },
  {
    path: "/typography",
    title: "IAO",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/tables",
    title: "ChampStats",
    rtlTitle: "قائمة الجدول",
    icon: "icon-world",
    class: ""
  },


  {
    path: "/champzone",
    title: "ChampZone",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-satisfied",
    class: ""
  },
  
  {
    path: "/overview",
    title: "Overview",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-compass-05",
    class: ""
  },

  {
    path: "/tokens",
    title: "Tokens",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-square-pin",
    class: ""
  },
  {
    path: "/toppairs",
    title: "Pairs",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-copy-04",
    class: ""
  },

  {
    path: "/accounts",
    title: "Accounts",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-badge",
    class: ""
  },

  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
