import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamsService } from './services/teams.service';
import { ITeam } from './interfaces';
import { ParameterSubjectService } from '../../shared/services/parameter-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  public team: ITeam = {} as ITeam;

  constructor(
    private parameterSubjectService: ParameterSubjectService<ITeam>,
  ) { }

  ngOnInit(): void {
    this.loadTeam();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private suscribeToTeam(): void {
    this.subscription = this.parameterSubjectService.getParameter().subscribe(data => {
      this.team = data;
    });
  }

  public loadTeam(): void {
    this.suscribeToTeam();
  }
}
