import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActiveTaskService } from '../shared/active-task.service';
import { ActiveTask } from '../shared/active-task';

@Component({
  selector: 'rul-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  private loadingTask: ActiveTask;

  constructor(private activeTaskService: ActiveTaskService) { }

  ngOnInit() {
    this.loadingTask = this.activeTaskService.addActiveTask("Loading Page 2 Component");

    // Simulate something that needs to be loaded
    setTimeout(() => { this.activeTaskService.removeActiveTask(this.loadingTask); }, 5000);
  }

  ngOnDestroy(){
    this.activeTaskService.removeActiveTask(this.loadingTask);
  }
}
