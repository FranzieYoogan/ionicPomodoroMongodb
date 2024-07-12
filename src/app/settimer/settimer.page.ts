import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FolderPage } from '../folder/folder.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-settimer',
  templateUrl: './settimer.page.html',
  styleUrls: ['./settimer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FolderPage, HttpClientModule]
})
export class SettimerPage implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  submit() {

    const timerName:any = document.getElementById('timerName')
    const timerMin:any = document.getElementById('timerMin')
    const timerSec:any = document.getElementById('timerSec')
    const containerAllAlert:any = document.getElementById('containerAllAlert')

    if(timerName.value && timerMin.value && timerSec.value) {

      const newConfig = {

        pomoMin: timerMin.value,
        pomoSec:timerSec.value,
        pomoName: timerName.value

      }

      this.http.post('http://localhost:3001/pomo', newConfig).subscribe(config => {
        console.log('Updated config:', config);
      });

      setTimeout(() => {

        window.location.href = "/timer"

      }, 2000);

    } else if(timerName.value == "" || timerMin.value == "" || timerSec.value == "") {

      containerAllAlert.style.display = "flex"
      containerAllAlert.style.transition = "1s"

      setTimeout(() => {

         containerAllAlert.style.opacity = "1"

      }, 300);

    }

  }

  close() {

    const containerAllAlert:any = document.getElementById('containerAllAlert')


  
     containerAllAlert.style.opacity = "0"
    containerAllAlert.style.transition = "1s"

    setTimeout(() => {

        containerAllAlert.style.display = "none"

    }, 1000);


  }

}
