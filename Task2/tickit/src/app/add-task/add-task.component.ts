import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private tasksAPI: TasksService) {}

  @Input() task!: Task;
  @Input() editMode!: boolean;
  @ViewChild('taskTitleInput') taskTitleInput!: ElementRef;
  @ViewChild('taskPrioritySelect') taskPrioritySelect!: ElementRef;
  @ViewChild('taskDescriptionTextarea') taskDescriptionTextarea!: ElementRef;
  @ViewChild('addTaskModal') addTaskModal!: ElementRef;

  addTask() {
    const newTask: Task = {
      id: Math.random().toString(),
      title: this.taskTitleInput.nativeElement.value,
      description: this.taskDescriptionTextarea.nativeElement.value,
      done: false,
      priority: parseInt(this.taskPrioritySelect.nativeElement.value),
      date: new Date(),
    };
    // validate task
    if (newTask.title === '') {
      alert('Please enter a title for the task.');
      return;
    }
    if (newTask.description === '') {
      alert('Please enter a description for the task.');
      return;
    }
    this.tasksAPI.addTask(newTask);
    this.taskTitleInput.nativeElement.value = '';
    this.taskDescriptionTextarea.nativeElement.value = '';
    
  }

  updateTask() {
    const updatedTask: Task = {
      id: this.task.id,
      title: this.taskTitleInput.nativeElement.value,
      description: this.taskDescriptionTextarea.nativeElement.value,
      done: this.task.done,
      priority: parseInt(this.taskPrioritySelect.nativeElement.value),
      date: new Date(),
    };
    this.tasksAPI.updateTask(updatedTask);
  }

  deleteTask() {
    this.tasksAPI.deleteTask(this.task);
  }
}
