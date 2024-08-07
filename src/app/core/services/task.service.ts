import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Task, TaskPayload } from '../interfaces/project';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {

  getTask(id: number): Observable<Task> {
    return this.get<Task>(`task/${id}`)
  }

  getTasksByEpicId(epicId: number): Observable<Task[]> {
    return this.get<Task[]>(`task`, { epicId });
  }

  getTasks(boardId: number, isBacklog: boolean): Observable<Task[]> {
    const params = {
      boardId: boardId.toString(),
      isBacklog: isBacklog.toString()
    };
    return this.get<Task[]>('task', { params });
  }


  createTask(taskPayload: TaskPayload ): Observable<Task> {
    return this.post<Task>(`task`, taskPayload ,  )
  }

  updateTask(taskId: number, updatedTask: Partial<Task>): Observable<Task> {
    const url = `${this.apiUrl}/task/${taskId}`;
    return this.httpClient.put<Task>(url, updatedTask,).pipe(
      map(response => {
        if (typeof response === 'object' && response !== null) {
          return response as Task;
        } else {
          throw new Error('Invalid response format');
        }
      }),
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Client-side error: ${error.error.message}`;
        } else {
          errorMsg = `Server-side error: ${error.status} - ${error.statusText}`;
        }
        console.error(errorMsg);
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  deleteTask(id: number): Observable<any> {
    return this.delete<Task>(`task/${id}`)
  }
}
