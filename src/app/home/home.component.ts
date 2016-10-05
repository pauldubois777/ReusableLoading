import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActiveTaskService } from '../shared/active-task.service';
import { ActiveTask } from '../shared/active-task';

@Component({
  selector: 'rul-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private loadingTask: ActiveTask;
  private myActiveTasks: Array<ActiveTask> = new Array<ActiveTask>();
  private activeTaskSeq: number = 0;

  constructor(private activeTaskService: ActiveTaskService) { }

  ngOnInit() {
    this.loadingTask = this.activeTaskService.addActiveTask("Loading Home Component");

    // Simulate something that needs to be loaded
    setTimeout(() => { this.activeTaskService.removeActiveTask(this.loadingTask); }, 5000);
  }

  ngOnDestroy(){
    this.activeTaskService.removeActiveTask(this.loadingTask);
    this.myActiveTasks.forEach(myActiveTask => {
      this.activeTaskService.removeActiveTask(myActiveTask);
    });
  }

  onAddTask(){
    this.activeTaskSeq++;
    let newTask = this.activeTaskService.addActiveTask("Home Active Task #" + this.activeTaskSeq);
    this.myActiveTasks.push(newTask);
  }

  onRemoveOldestTask(){
    if (this.myActiveTasks.length > 0){
      let removeTask = this.myActiveTasks.splice(0, 1)[0];
      this.activeTaskService.removeActiveTask(removeTask);
    }
  }
}
