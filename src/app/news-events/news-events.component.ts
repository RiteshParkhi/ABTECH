import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppDataService } from '../app-data.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {

  newsData: any;

  constructor(private fileService: AppDataService) { }

  ngOnInit() {
    this.fileService.fetchNewsData().subscribe(
      (data) => {
        this.newsData = data;
      });
  }

}
