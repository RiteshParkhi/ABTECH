
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Data } from './runner-advance/data';
import { IrData } from './image-runner/ir-data';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class AppDataService {
  url: string;
  
  constructor(private http: HttpClient) { }
  
  

  fetchData(){
    return this.http.get("assets/data/IRA/imageRunnerAdv.json").map((response: Response) => {
      return response;
    })
  }

  fetchIRData(){
    return this.http.get("assets/data/IR/imageRunner.json").map((response: Response) => {
      return response;
    })
  }

  fetchSpec(productName: string):Observable<Data>{
    this.url="assets/data/IRA/IRA" + productName + ".json";
    return this.http.get(this.url).map((response: Data) => {
      return response;
    })
  }

  

  fetchIRSpec(productName: string):Observable<IrData>{
    this.url="assets/data/IR/IR" + productName + ".json";
    return this.http.get(this.url).map((response: IrData) => {
      return response;
    })
  }

  fetchDSData(){
    return this.http.get("assets/data/DS/DocScanner.json").map((response: Response) => {
      return response;
    })
  }

  fetchDSSpec(productName: string):Observable<Data>{
    this.url="assets/data/DS/DS" + productName + ".json";
    return this.http.get(this.url).map((response: Data) => {
      return response;
    })
  }

  fetchNewsData(){
    return this.http.get("assets/data/newsData/news.json").map((response: Response) => {
      return response;
    })
  }

  fetchContactUsData(){
    return this.http.get("assets/data/contactUs/contactUs.json").map((response: Response) => {
      return response;
    })
  }
}
 