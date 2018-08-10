import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppDataService } from '../app-data.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsData:any;

  constructor(private fileService:AppDataService) { }

  ngOnInit() {
    this.fileService.fetchContactUsData().subscribe(
      (data)=>{
        this.contactUsData = data;      
      });
    }
}
