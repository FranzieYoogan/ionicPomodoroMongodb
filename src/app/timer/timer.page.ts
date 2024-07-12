import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FolderPage } from '../folder/folder.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FolderPage, HttpClientModule]
})
export class TimerPage implements OnInit {

  constructor(private http: HttpClient) {}

  data:any
  ngOnInit() {
    const minEdit:any = document.getElementById('minEdit')
    const secEdit:any = document.getElementById('secEdit')
    const buttonEdit:any = document.getElementById('buttonEdit')
    const formSelectEdit:any = document.getElementById('formSelectEdit')

    this.http.get('http://localhost:3001/pomo').subscribe(config => {
      console.log(config)
      this.data = config
    });

    let z = 1000

    const shield:any = document.getElementById('shield')
    
    shield.style.transition = "1s"

    setInterval(() => {

      setTimeout(() => {
             shield.style.transform = "scale(1.2)"
      }, 500);
 
      setTimeout(() => {
        
        shield.style.transform = "scale(1)"

      }, 1000);

    }, z);


    minEdit.addEventListener('keypress',(event: { key: string; }) => {

      if(event.key === "Enter") {

        buttonEdit.click()

      }

    })

    secEdit.addEventListener('keypress',(event: { key: string; }) => {

      if(event.key === "Enter") {

        buttonEdit.click()

        

        formSelectEdit.style.transition = "1s"
        formSelectEdit.style.opacity = "0"
        setTimeout(() => {
    
          
          formSelectEdit.style.display = "none"
          
        }, 1000);



      }

    })



  }


  start() {
    let min:any = document.getElementById('min')
    let sec:any = document.getElementById('sec')

    setInterval(() => {

      sec.innerHTML--

      if(sec.innerHTML == -1) {

        min.innerHTML--
        sec.innerHTML = 60
      }

      if(sec.innerHTML.length == 1) {

        sec.innerHTML = "0" + sec.innerHTML 

      }

      if(min.innerHTML == -1 && sec.innerHTML == 60) {

        min.innerHTML = "00"
        sec.innerHTML = "00"

      }

    }, 1000);

  }

  editSubmit() {

    const minEdit:any = document.getElementById('minEdit')
    const secEdit:any = document.getElementById('secEdit')
    
    let min:any = document.getElementById('min')
    let sec:any = document.getElementById('sec')

    min.innerHTML = minEdit.value
    sec.innerHTML = secEdit.value


  }


  show() {

    const formSelect:any = document.getElementById('formSelect')
    
    formSelect.style.display = "block"
    formSelect.style.transition = "1s"

    setTimeout(() => {

      formSelect.style.opacity = "1"
      
    }, 500);


  }

  showEdit() {

    const formSelectEdit:any = document.getElementById('formSelectEdit')
    
    formSelectEdit.style.display = "block"
    formSelectEdit.style.transition = "1s"

    setTimeout(() => {

      formSelectEdit.style.opacity = "1"
      
    }, 500);


  }

  data2:any
  select() {

    let min:any = document.getElementById('min')
    let sec:any = document.getElementById('sec')
    const formSelect:any = document.getElementById('formSelect')
    const selectValue:any = document.getElementById('selectValue')

    this.http.get(`http://localhost:3001/pomo/${selectValue.value}`).subscribe(config2 => {

      console.log('specific', config2)
      this.data2 = config2

      min.innerHTML =  this.data2['pomoMin']
      sec.innerHTML =  this.data2['pomoSec']



    
 
      formSelect.style.transition = "1s"
      formSelect.style.opacity = "0"
  
      setTimeout(() => {
  
        formSelect.style.display = "none"

      }, 1000);

    });


  }

}
