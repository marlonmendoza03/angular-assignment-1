import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

  logs: string[] = [];
  detailsShown: boolean = false;

  logItems(): void{
    this.logs.push(Date.now().toString());
    this.detailsShown = !this.detailsShown;
  }

  getBackgroundColor(index: number): string{
    if(index >= 5){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}
