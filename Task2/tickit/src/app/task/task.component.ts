import { Component, Input } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(private tasksAPI: TasksService) {}
  @Input() task!: Task;

  getTimePassedSinceDate(inputDate: Date): string {
    const now = new Date();
    const timeDifference = now.getTime() - new Date(inputDate).getTime();

    // Define the time units in milliseconds
    const minuteInMilliseconds = 60 * 1000;
    const hourInMilliseconds = 60 * minuteInMilliseconds;
    const dayInMilliseconds = 24 * hourInMilliseconds;
    const weekInMilliseconds = 7 * dayInMilliseconds;
    const monthInMilliseconds = 30 * dayInMilliseconds;
    const yearInMilliseconds = 365 * dayInMilliseconds;

    if (timeDifference < minuteInMilliseconds) {
      return `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < hourInMilliseconds) {
      return `${Math.floor(timeDifference / minuteInMilliseconds)} minutes ago`;
    } else if (timeDifference < dayInMilliseconds) {
      return `${Math.floor(timeDifference / hourInMilliseconds)} hours ago`;
    } else if (timeDifference < weekInMilliseconds) {
      return `${Math.floor(timeDifference / dayInMilliseconds)} days ago`;
    } else if (timeDifference < monthInMilliseconds) {
      return `${Math.floor(timeDifference / weekInMilliseconds)} weeks ago`;
    } else if (timeDifference < yearInMilliseconds) {
      return `${Math.floor(timeDifference / monthInMilliseconds)} months ago`;
    } else {
      return `${Math.floor(timeDifference / yearInMilliseconds)} years ago`;
    }
  }

  markTaskAsDone(): void {
    this.tasksAPI.markTaskAsDone(this.task);
  }

  markTaskAsUndone(): void {
    this.tasksAPI.markTaskAsUndone(this.task);
  }

  deleteTask(): void {
    this.tasksAPI.deleteTask(this.task);
  }
}
