import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ChampzoneComponent } from "src/app/pages/champzone/champzone.component";
import { OverviewComponent } from "src/app/pages/overview/overview.component";
import { TokensComponent } from "src/app/pages/tokens/tokens.component";
import { ToppairsComponent } from "src/app/pages/toppairs/toppairs.component";
import { AccountsComponent } from "src/app/pages/accounts/accounts.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "champzone", component: ChampzoneComponent },
  { path: "overview", component: OverviewComponent },
  { path: "tokens", component: TokensComponent },
  { path: "toppairs", component: ToppairsComponent },
  { path: "accounts", component: AccountsComponent },

  // { path: "rtl", component: RtlComponent }
];
