import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

// import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  imageList:any =[];
  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.imageList = [{url:'../../../assets/video/coffee.MOV'},
    {url:'../../../assets/video/1.mp4'},
    {url:'../../../assets/video/2.mp4'},
    {url:'../../../assets/video/3.mp4'},
    {url:'../../../assets/video/4.mp4'},
    {url:'../../../assets/video/5.mp4'},
    {url:'../../../assets/video/6.mp4'},];
  }

  // ionViewLoaded(){
  //   ele = document.getElementById(elementId)
  // }


}
