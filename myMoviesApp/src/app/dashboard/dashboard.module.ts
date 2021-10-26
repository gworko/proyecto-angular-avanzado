import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { WatchingListComponent } from './components/watching-list/watching-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

@NgModule({
  declarations: [DashboardPageComponent, WatchingListComponent, WishListComponent],
  exports: [DashboardPageComponent, WatchingListComponent, WishListComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

