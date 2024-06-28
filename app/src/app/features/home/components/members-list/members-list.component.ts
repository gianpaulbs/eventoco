import { Component, Input } from '@angular/core';
import { IMember } from '../../interfaces';

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css',
})
export class MembersListComponent {
  @Input() members: IMember[] = [];
}
