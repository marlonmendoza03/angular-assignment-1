import { Component } from '@angular/core';

@Component({
  selector: 'app-success-component',
  templateUrl: './success-component.component.html',
  styleUrls: ['./success-component.component.css']
})
export class SuccessComponentComponent {

  successClick(): void{
    alert('Success');
  }
  
}
