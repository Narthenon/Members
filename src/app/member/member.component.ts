/*
* File: ButtonPanel.java
* Author: Barabás Gergő
* Copyright: 2021, Barabás Gergő
* Group: Szoft II/n
* Date: 2021-03-31
* Github: https://github.com/Narthenon/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberForm = new FormGroup( {
    name: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])
  })

  constructor() { }

  ngOnInit(): void {
  }
  

  saveMember() {
    alert(
      'Név: ' + this.memberForm.value.name + '\n' + 
      'Település:' + this.memberForm.value.city + '\n' +
      'Cím:' + this.memberForm.value.address + '\n' +
      'E-mail:' + this.memberForm.value.email

      );
  }

}
