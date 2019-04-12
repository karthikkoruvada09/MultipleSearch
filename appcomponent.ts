import { Component, OnInit } from '@angular/core';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kar';

constructor(private ser:ServeService){
};

data=[];
  ngOnInit(){
    this.ser.met().subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  };


  v:any;
  search(v){
    console.log(v);
    this.v=v;
  }


}
