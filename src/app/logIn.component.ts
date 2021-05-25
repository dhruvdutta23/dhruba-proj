import { Component } from '@angular/core';

@Component({
  selector: 'log-In',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss']
})

export class logInComponent {

  username:string = ""
  password:string=""
  cond1=false
  cond2=false

  onClick(){
    if(this.password=='' && this.username=='')
    {
      this.cond1=true
      this.cond2=true
    }

    else if (this.username==''){
     this.cond1=true

    }
    else if( this.password==''){
     this.cond2=true
    }

    else if (this.username=="1234" && this.password=="1234"){
      
      alert("log in success")
    }
    else
    {
      this.username=""
      this.password=""
      alert("wrong credentials")
    }
  }
}
