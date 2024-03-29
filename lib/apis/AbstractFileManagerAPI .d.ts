import { AxiosResponse } from "axios";
import { Client } from "./Client";
import { InterfaceFileManagerAPI } from "./InterfaceFileManagerAPI";
export declare abstract class AbstractFileManagerAPI implements InterfaceFileManagerAPI {
    client: Client;
    constructor(client: Client);
    abstract initialize(): Promise<AxiosResponse>;
    abstract content(data: any): Promise<AxiosResponse>;
    abstract tree(data: any): Promise<AxiosResponse>;
    abstract selectDisk(data: any): Promise<AxiosResponse>;
    abstract upload(data: any): Promise<AxiosResponse>;
    abstract delete(data: any): Promise<AxiosResponse>;
    abstract paste(data: any): Promise<AxiosResponse>;
    abstract rename(data: any): Promise<AxiosResponse>;
    abstract download(data: any): Promise<AxiosResponse>;
    abstract thumbnails(data: any): Promise<AxiosResponse>;
    abstract preview(data: any): Promise<AxiosResponse>;
    abstract url(data: any): Promise<AxiosResponse>;
    abstract info(data: any): Promise<AxiosResponse>;
    abstract listshare(data: any): Promise<AxiosResponse>;
    abstract share(data: any): Promise<AxiosResponse>;
    abstract unshare(data: any): Promise<AxiosResponse>;
    abstract checkExist(data: any): Promise<AxiosResponse>;
    abstract createDirectory(data: any): Promise<AxiosResponse>;
    abstract createFile(data: any): Promise<AxiosResponse>;
    abstract updateFile(data: any): Promise<AxiosResponse>;
    abstract streamFile(data: any): Promise<AxiosResponse>;
    abstract zip(data: any): Promise<AxiosResponse>;
    abstract unzip(data: any): Promise<AxiosResponse>;
    abstract ckeditor(): Promise<AxiosResponse>;
    abstract tinymce(): Promise<AxiosResponse>;
    abstract tinymce5(): Promise<AxiosResponse>;
    abstract summernote(): Promise<AxiosResponse>;
    abstract fmButton(): Promise<AxiosResponse>;
}
