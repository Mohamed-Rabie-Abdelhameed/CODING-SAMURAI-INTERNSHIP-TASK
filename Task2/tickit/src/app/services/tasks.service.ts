import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly storageKey = 'tasks';
  private currentId = 11;
  private allTasks: Task[] = [];

  constructor() {
    const tasksFromStorage = localStorage.getItem(this.storageKey);
    if (tasksFromStorage) {
      this.allTasks = JSON.parse(tasksFromStorage);
    } else {
      this.allTasks = [
        {
          id: '1',
          title: 'Complete Project Proposal',
          description: 'Write and finalize the project proposal document.',
          done: false,
          priority: 2,
          date: new Date('2023-09-05'),
        },
        {
          id: '2',
          title: 'Meeting with Client',
          description: 'Discuss project details with the client.',
          done: true,
          priority: 1,
          date: new Date('2023-09-06'),
        },
        {
          id: '3',
          title: 'Code Refactoring',
          description: 'Refactor codebase to improve performance.',
          done: false,
          priority: 3,
          date: new Date('2023-08-12'),
        },
        {
          id: '4',
          title: 'Prepare Presentation',
          description: 'Create a presentation for the team meeting.',
          done: true,
          priority: 2,
          date: new Date('2023-09-01'),
        },
        {
          id: '5',
          title: 'Review Code Changes',
          description: 'Review and provide feedback on recent code changes.',
          done: false,
          priority: 1,
          date: new Date('2023-01-14'),
        },
        {
          id: '6',
          title: 'Write Test Cases',
          description: 'Create test cases for new features.',
          done: false,
          priority: 3,
          date: new Date('2023-03-23'),
        },
        {
          id: '7',
          title: 'Design UI Mockups',
          description: 'Create mockups for the user interface redesign.',
          done: true,
          priority: 2,
          date: new Date('2023-01-16'),
        },
        {
          id: '8',
          title: 'Sprint Planning',
          description: 'Plan tasks and priorities for the upcoming sprint.',
          done: false,
          priority: 1,
          date: new Date('2023-04-17'),
        },
        {
          id: '9',
          title: 'Write Documentation',
          description: 'Document the project features and usage instructions.',
          done: false,
          priority: 3,
          date: new Date('2023-03-18'),
        },
        {
          id: '10',
          title: 'Bug Fixing',
          description: 'Investigate and fix reported bugs in the application.',
          done: true,
          priority: 2,
          date: new Date('2023-05-19'),
        },
      ];
      this.saveTasksToLocalStorage();
    }
  }

  
  getAllTasks(): Task[] {
    return this.allTasks;
  }

  markTaskAsDone(task: Task): void {
    task.done = true;
    this.saveTasksToLocalStorage();
  }

  markTaskAsUndone(task: Task): void {
    task.done = false;
    this.saveTasksToLocalStorage();
  }

  addTask(task: Task): void {
    task.id = this.currentId.toString();
    this.currentId++;
    this.allTasks.push(task);
    this.saveTasksToLocalStorage();
  }

  deleteTask(task: Task): void {
    const index = this.allTasks.indexOf(task);
    this.allTasks.splice(index, 1);
    this.saveTasksToLocalStorage();
  }

  updateTask(task: Task): void {
    const index = this.allTasks.findIndex((t) => t.id === task.id);
    this.allTasks[index] = task;
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.allTasks));
  }
}
