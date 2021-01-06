import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-layout-row',
  templateUrl: './fx-layout-row.component.html',
  styleUrls: ['../app.component.css']
})
export class FxLayoutRowComponent implements OnInit {  
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
