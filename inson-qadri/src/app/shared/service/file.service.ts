import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

 // API url
api=environment.baseUrl+"/api/request"
    
constructor(private http:HttpClient) { }

// Returns an observable
singleFileUpload(file:File):Observable<any> {
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    
    return this.http.post(this.api, formData)
}}
