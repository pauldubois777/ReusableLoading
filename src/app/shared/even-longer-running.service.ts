import { Injectable } from '@angular/core';

import { ActiveTask } from './active-task';
import { ActiveTaskService } from './active-task.service';

@Injectable()
export class EvenLongerRunningService {
  private longRunningTask: ActiveTask;

  constructor(private activeTaskService: ActiveTaskService) {
  }

  startTask(){
    if (!this.longRunningTask){
      this.longRunningTask = this.activeTaskService.addActiveTask("Even Longer Running Service Task");
      setTimeout(() => { 
        this.activeTaskService.removeActiveTask(this.longRunningTask);
        this.longRunningTask = null; 
      }, 20000);
    }
  }
}
