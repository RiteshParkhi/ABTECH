import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppDataService } from '../app-data.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-runner-advance',
  templateUrl: './runner-advance.component.html',
  styleUrls: ['./runner-advance.component.css']
})
export class RunnerAdvanceComponent implements OnInit {

  productData: any;
  productSpecification: any;
  selectedProduct: String;
  selectedRecord: String;

  constructor(private fileService: AppDataService) { }

  ngOnInit() {
    this.fileService.fetchData().subscribe(
      (data) => {
        this.productData = data;
      });

  }

  loadSpec(productName: string) {
    $('#modalOne').modal('show');
    this.selectedProduct = productName;
    this.fileService.fetchSpec(productName).subscribe(
      res => {
        this.productSpecification = res[0];
        console.log(res[0]);
      });
  }
}
