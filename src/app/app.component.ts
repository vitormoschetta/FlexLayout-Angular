import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  pre01: boolean  
  
  ngOnInit() {
    this.pre01 = false
  }

  mostrarEsconder01() {    
    if (this.pre01)
      this.pre01 = false
    else
      this.pre01 = true      
  }  


}
