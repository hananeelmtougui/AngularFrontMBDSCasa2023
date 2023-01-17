import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  
  assignments=[
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu:"2022-01-25",
      rendu:true
    },
    {
      nom:"Devoir Angular de Mr Pasquier",
      dateDeRendu:"2022-02-26",
      rendu:false
    },
    {
      nom:"Devoir Angular de Mr MOPOLO",
      dateDeRendu:"2022-01-6",
      rendu:false
    },
  ];

  getCouleur(a:any){
    if(a.rendu) return 'green';
    else return 'red';
  }

}
