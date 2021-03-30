Angular file uploader is an Angular 2+ file uploader module with real-time progress bar and Angular Universal Compatibility.

###Install
```
npm install angular-file-uploader
```
###Usage
- Bootstrap.min.css is required.
  Include 
  ```html
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  ```
  in your index.html.
- Import FileUploadModule inside your app.module.ts 
  ```javascript
  import { FileUploadModule } from "angular-file-uploader";
  ```
  ```javascript
  @NgModule({
    imports: [
        ...,
        FileUploadModule,
        ...
    ]
  })
  ```
#####Example-1
  ```html
  <angular-file-uploader
      [uploadAPI]="'https://example-file-upload-api'">
  </angular-file-uploader>
  ```  
#####Example-2
  ```html
  <angular-file-uploader 
      [multiple]="true" 
      [formatsAllowed]="'.jpg,.png'" 
      [maxSize]="5" 
      [uploadAPI]="'https://example-file-upload-api'"
      [resetUpload]=resetUpload
      (ApiResponse)="DocUpload($event)"
      [hideProgressBar]="false">
  </angular-file-uploader>
  ```  

| **Properties**             | **Description**                                                                                                                                                                       | **Default Value**                          |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| multiple : boolean         | Set it as " true " for uploading multiple files at a time and as " false " for single file at a time.                                                                                                                                 | false                                  |
| formatsAllowed : string    | Specify the formats of file you want to upload.                                                                                                                                       | '.jpg,.png,.pdf,.docx, .txt,.gif,.jpeg' |
| uploadAPI : string         | Complete api url to which you want to upload.                                                                                                                                         | undefined                              |
| maxSize : number           | Maximum size limit for files in MB.                                                                                                                                                   | 20                                     |
| ApiResponse:EventEmitter   | It will return the response it gets back from the uploadAPI. Assign one custom function ,for example " DocUpload($event) " here, where " $event " will contain the response from the api.                                                           |                                        |
| resetUpload : boolean      | Give it's value as " true " whenever you want to clear the list of  uploads being displayed. It's better to assign one boolean variable (resetUpload here)to it and then  change that variable's value. Remember to change resetUpload value 'true' to 'false' after every reset. | false                                  |
| hideProgressBar : boolean  | Set it as " true " to hide the Progress bar. | false |

You have seen that by using 'resetUpload' property, you can reset the module easily, however if you need to reset more than one time, there's a better way of doing that( bcoz in 'resetUpload' property, you have to make it as false in order to use it again):-

#####Example-3
  ```html
  <angular-file-uploader #fileUpload1
      [multiple]="true" 
      [formatsAllowed]="'.jpg,.png'" 
      [maxSize]="5" 
      [uploadAPI]="'https://example-file-upload-api'"
      [resetUpload]=resetUpload
      (ApiResponse)="DocUpload($event)"
      [hideProgressBar]="false">
  </angular-file-uploader>
  ```
  - Assign one local reference variable (here 'fileUpload1') to the component.
  - Now use this local reference variable in your xyz.component.ts file.
    ```javascript
        @ViewChild('fileUpload1')
        private fileUpload1:  FileUploadComponent;
    ```
    - Remember to import ViewChild and FileUploadComponent properly in your component.
      ```javascript
        import { ViewChild } from '@angular/core';
        import { FileUploadComponent } from "angular-file-uploader";
      ```
  - That's it.....all done, now just use
    ```javascript
        this.fileUpload1.resetFileUpload();
    ```
    to reset the module hassle-free anytime.

#####Points to note:
- Files are uploaded in FormData format.

###Coming Soon:
- Multiple themes.
- Drag n Drop.
- More customization options.