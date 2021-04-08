import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class FileUploadComponent implements OnInit, OnChanges {
    config: any;
    resetUpload: boolean;
    ApiResponse: EventEmitter<{}>;
    theme: string;
    id: number;
    hideProgressBar: boolean;
    maxSize: number;
    uploadAPI: string;
    formatsAllowed: string;
    multiple: boolean;
    headers: any;
    hideResetBtn: boolean;
    hideSelectBtn: boolean;
    idDate: number;
    reg: RegExp;
    selectedFiles: Array<any>;
    notAllowedList: Array<Object>;
    Caption: Array<string>;
    singleFile: boolean;
    progressBarShow: boolean;
    uploadBtn: boolean;
    uploadMsg: boolean;
    afterUpload: boolean;
    uploadClick: boolean;
    uploadMsgText: string;
    uploadMsgClass: string;
    percentComplete: number;
    constructor();
    ngOnChanges(rst: SimpleChanges): void;
    ngOnInit(): void;
    resetFileUpload(): void;
    onChange(event: any): void;
    uploadFiles(): void;
    removeFile(i: any, sf_na: any): void;
    convertSize(fileSize: number): string;
    attachpinOnclick(): void;
    drop(event: any): void;
    allowDrop(event: any): void;
}
