import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { TeamListComponent } from './components/team-list/team-list.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { MembersListComponent } from './components/members-list/members-list.component';

@NgModule({
  declarations: [HomeComponent, TeamListComponent, EventsListComponent, MembersListComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
