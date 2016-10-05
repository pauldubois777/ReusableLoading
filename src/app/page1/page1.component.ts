import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActiveTaskService } from '../shared/active-task.service';
import { ActiveTask } from '../shared/active-task';

@Component({
  selector: 'rul-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  private loadingTask: ActiveTask;

  constructor(private activeTaskService: ActiveTaskService) { }

  ngOnInit() {
    this.loadingTask = this.activeTaskService.addActiveTask("Loading Page 1 Component");

    // Simulate something that needs to be loaded
    setTimeout(() => { this.activeTaskService.removeActiveTask(this.loadingTask); }, 5000);
  }

  ngOnDestroy(){
    this.activeTaskService.removeActiveTask(this.loadingTask);
  }
}
