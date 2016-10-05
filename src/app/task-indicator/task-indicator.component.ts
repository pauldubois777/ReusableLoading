import { 
  Component, 
  OnInit, 
  OnDestroy,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ActiveTaskService } from '../shared/active-task.service';
import { ActiveTask } from '../shared/active-task';

@Component({
  selector: 'rul-task-indicator',
  templateUrl: './task-indicator.component.html',
  styleUrls: ['./task-indicator.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class TaskIndicatorComponent implements OnInit, OnDestroy {
  private activeTasksChangedSubscription: Subscription;
  private activeTasks: Array<ActiveTask> = new Array<ActiveTask>();

  constructor(private activeTaskService: ActiveTaskService) { }

  ngOnInit() {
    this.activeTasksChangedSubscription = this.activeTaskService.activeTasksChanged.subscribe(
      (activeTasks: Array<ActiveTask>) =>  this.activeTasks = activeTasks
    );
  }

  ngOnDestroy() {
    this.activeTasksChangedSubscription.unsubscribe();
  }
}
