import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   columns: string[] = ['Date', 'Hb', 'TLC', 'Platelets','btn'];
  dataSource = ELEMENT_DATA;
  buttonClick!:string
  buttonClicked=false

  arr=['assets/sep_2021.jpg','assets/dec_2021.jpg']

  drop(event: any) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  counter=0
  btnClicked(a:any)
  {
    this.counter=this.counter+1;
    if(this.counter%2===0)
    {
      this.buttonClicked=!this.buttonClicked
        
      
    }
    setTimeout(() => {
      this.buttonClicked=true
      this.buttonClick=this.arr[a]
      
    }, 150);
   
    
  }

}

export interface PeriodicElement {
  TLC: number;
  Date: string;
  Platelets: number;
  Hb: number;
  btn:any
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Date: '01-Dec', Hb: 15.3, TLC: 8500, Platelets: 312000,btn:'1'},
  {Date: '15-Sep', Hb: 15.2, TLC: 7800, Platelets: 355000,btn:'0'}

  
];
