import { Component } from '@angular/core';
import { noop } from 'rxjs';
import {books}from '../book-data'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent {
    books=books
    arr=[]
    Title=''

    delete=false

    onDelete(Title){
         this.delete=true
         this.Title=Title
    }

         no(){
           this.delete=false
         }

         yes(){
           alert(this.Title)
           this.books.splice(   this.books.findIndex(item=>item.Title==this.Title),1)
           this.delete=false
         }
    
}