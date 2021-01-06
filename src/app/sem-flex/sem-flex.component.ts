import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem-flex',
  templateUrl: './sem-flex.component.html',
  styleUrls: ['../app.component.css']
})
export class SemFlexComponent implements OnInit {
  codigo: boolean  
  
  ngOnInit() {
    this.codigo = false   
  }

  mostrarEsconder() {    
    if (this.codigo)
      this.codigo = false
    else
      this.codigo = true      
  }  
  

}
