import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { ITeam } from '../../interfaces';
import { ParameterSubjectService } from '../../../../shared/services/parameter-subject.service';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
})
export class TeamListComponent implements OnInit {
  public teams: ITeam[] = [];
  public colors: string[] = [];

  constructor(
    private teamsService: TeamsService,
    private parameterSubjectService: ParameterSubjectService<ITeam>,
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  private getRandomColor(): string {
    const colors = ['#FF993A', '#708AAB', '#F1C40F'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  private assignRandomColorsForButtons(): void {
    this.colors = this.teams.map(() => this.getRandomColor());
  }

  public getAll(): void {
    this.teamsService.getAll().subscribe(teams => {
      this.teams = teams;
      this.assignRandomColorsForButtons();
      this.chooseTeam(this.teams[0])
    });
  }

  public getInitials(teamName: string): string {
    return teamName
      .split(' ')
      .map(word => word[0])
      .join('');
  }

  public chooseTeam(team: ITeam): void {
    this.parameterSubjectService.sendParameter(team);
  }
}
