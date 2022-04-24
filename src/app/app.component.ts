import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  panelOpenState = false;

constructor(){}

ngOnInit()
{
  console.log(this.data);
  if(this.panelOpenState == true)
  {
    var changeColor = <HTMLElement> document.getElementById('a')
    changeColor.style.color="red"
  }
}
  arr=['assets/dec_2021.jpg','assets/sep_2021.jpg','assets/may_2021.jpg']

  loading: boolean = true
  onLoad() {
      this.loading = false;
  }
opened()
{
  // var changeColor = <HTMLElement> document.getElementById('a')
  //   changeColor.style.color="red"
}
closed()
{
  // var changeColor = <HTMLElement> document.getElementById('a')
  //   changeColor.style.color="black"
}


 data= 
 [
  {Date: '23-Apr-2022', image:'assets/apr_2022.jpg' },
  {Date: '21-Feb-2022', image:'assets/feb_2022.jpg' },
  {Date: '01-Dec-2021', image:'assets/dec_2021.jpg' },
  {Date: '15-Sep-2021', image:'assets/sep_2021.jpg'},
  {Date: '27-may-2021', image:'assets/may_2021.jpg'},
  {Date: '05-Apr-2021', image:'assets/apr_2022.jpg' }

  
 ]


 
}

