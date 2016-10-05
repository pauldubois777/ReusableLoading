import { Injectable, EventEmitter } from '@angular/core';

import { ActiveTask } from './active-task';

@Injectable()
export class ActiveTaskService {
  activeTasksChanged = new EventEmitter<Array<ActiveTask>>();
  private activeTasks: Array<ActiveTask> = new Array<ActiveTask>();

  constructor() { }

  addActiveTask(description: string): ActiveTask{
    let activeTask = new ActiveTask(description);
    this.activeTasks.push(activeTask);
    this.activeTasksChanged.emit(this.activeTasks);
    return activeTask;
  }

  removeActiveTask(activeTask: ActiveTask){
    // TODO: Improve this to not use index when removing element, since the array MIGHT change between getting the idx and removing the element.
    let idx = this.activeTasks.indexOf(activeTask);
    if (idx > -1 ){
      this.activeTasks.splice(idx, 1);
      this.activeTasksChanged.emit(this.activeTasks);
    }
  }
}
