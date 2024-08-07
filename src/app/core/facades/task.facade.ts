import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Task, TaskPayload } from '../interfaces/project';
import { ApiService } from '../services/api.service';
import { TaskService } from '../services/task.service';
import { ProjectFacade } from './project.facade';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  taskService = inject(TaskService);
  projectFacade = inject(ProjectFacade);

  projectId = this.projectFacade.getProjectId();
  
  getTask(id: number): Observable<Task> {
    return this.taskService.getTask(id);
  }

  getTasks(boardId: number, isBacklog: boolean): Observable<Task[]> {
    return this.taskService.getTasks(boardId, isBacklog);
  }

  createTask(taskPayload: TaskPayload): Observable<Task> {
    return this.taskService.createTask(taskPayload,);
  }

  updateTaskPositionAndColumn(taskId: number, position: number, boardColumnId: number): Observable<Task> {
    const updatedTask = { position, boardColumnId };
    return this.taskService.updateTask(taskId, updatedTask).pipe(
      tap((updatedTask) => {
      }),
      catchError((error) => {
        console.error(`Error updating task ${taskId} position and column:`, error);
        return throwError(() => new Error(`Error updating task ${taskId} position and column: ${error.message || 'Unknown error'}`));
      })
    );
  }

  getTasksByEpicId(epicId: number): Observable<Task[]> {
    return this.taskService.getTasksByEpicId(epicId);
  }

  deleteTask(id: number): Observable<any> {
    return this.taskService.deleteTask(id);
  }

}