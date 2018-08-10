import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppDataService } from '../app-data.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-image-runner',
  templateUrl: './image-runner.component.html',
  styleUrls: ['./image-runner.component.css']
})
export class ImageRunnerComponent implements OnInit {

  irProduct: any
  productData: any;
  productSpecification: any;
  selectedProduct: String;
  selectedRecord: String;

  constructor(private fileService: AppDataService) { }

  ngOnInit() {

    this.fileService.fetchIRData().subscribe(
      (data)=> {
        console.log(data);
        this.productData=data;
      });

  }

  loadSpec(productName: string) {
    $('#modalOne').modal('show');
    this.selectedProduct = productName;
    this.fileService.fetchIRSpec(productName).subscribe(
      res => {
        this.productSpecification = res[0];
        console.log(res[0]);
      });
  }
}
