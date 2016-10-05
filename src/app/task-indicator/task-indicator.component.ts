import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ActiveTaskService } from '../shared/active-task.service';
import { ActiveTask } from '../shared/active-task';

@Component({
  selector: 'rul-task-indicator',
  templateUrl: './task-indicator.component.html',
  styleUrls: ['./task-indicator.component.css']
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
