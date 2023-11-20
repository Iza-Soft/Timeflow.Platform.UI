import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getPath } from 'src/app/config/api-list.config';
import { API_VERSION_CONFIG } from 'src/app/config/api-version.config';
import { IProject } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class HttpProjectService {
  constructor(private http: HttpClient) {}

  getProjectByUserIdAsync(userId: string): Observable<IProject[]> {
    return this.http.get<IProject[]>(
      [
        getPath('PROJECT_BY_USERID_API_URL').replace(
          'apiVersion',
          API_VERSION_CONFIG.V1
        ),
        userId,
      ].join('/')
    );
  }
}
