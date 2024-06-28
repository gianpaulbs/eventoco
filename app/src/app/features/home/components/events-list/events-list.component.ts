import { Component, Input } from '@angular/core';
import { IEvent } from '../../interfaces';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
})
export class EventsListComponent {
  @Input() events: IEvent[] = [];
}
