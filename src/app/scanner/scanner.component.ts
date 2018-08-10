import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppDataService } from '../app-data.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  productData: any;
  productSpecification: any;
  selectedProduct: String;
  selectedRecord: String;

  constructor(private fileService: AppDataService) { }

  ngOnInit() {
    this.fileService.fetchDSData().subscribe(
      (data) => {
        this.productData = data;
      });

  }

  loadSpec(productName: string) {
    $('#modalOne').modal('show');
    this.selectedProduct = productName;
    this.fileService.fetchDSSpec(productName).subscribe(
      res => {
        this.productSpecification = res[0];
        console.log(res[0]);
      });
  }
}