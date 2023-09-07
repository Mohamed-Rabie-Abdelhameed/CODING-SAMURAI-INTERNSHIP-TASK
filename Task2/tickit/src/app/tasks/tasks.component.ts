import { Component, HostListener, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private tasksAPI: TasksService) {}
  isScrolledToBottom: boolean = false;
  tasks: Task[] = [];
  shownTasks: Task[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 80
    ) {
      this.isScrolledToBottom = true;
    } else {
      this.isScrolledToBottom = false;
    }
  }

  ngOnInit() {
    this.tasks = this.tasksAPI.getAllTasks();
    this.shownTasks = this.tasks;
  }

  filterTasks(filter: string) {
    switch (filter) {
      case 'All':
        this.shownTasks = this.tasks;
        break;
      case 'Completed':
        this.shownTasks = this.tasks.filter((task) => task.done);
        break;
      case 'Pending':
        this.shownTasks = this.tasks.filter((task) => !task.done);
        break;
    }
  }

  sortTasks(sort: string) {
    switch (sort) {
      case 'Priority high to low':
        this.shownTasks = this.shownTasks.sort(
          (a, b) => a.priority - b.priority
        );
        break;
      case 'Priority low to high':
        this.shownTasks = this.shownTasks.sort(
          (a, b) => b.priority - a.priority
        );
        break;
      case 'Date created':
        this.shownTasks = this.shownTasks.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }
  }
}
