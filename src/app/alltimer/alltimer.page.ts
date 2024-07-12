import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FolderPage } from '../folder/folder.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-alltimer',
  templateUrl: './alltimer.page.html',
  styleUrls: ['./alltimer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FolderPage, HttpClientModule]
})
export class AlltimerPage implements OnInit {

  constructor(private http: HttpClient) {}

  dataAll:any
  ngOnInit() {

    this.http.get('http://localhost:3001/pomo').subscribe(config => {
        
      this.dataAll = config

    });

  }

  delete(item: any) {

    this.http.delete(`http://localhost:3001/pomo/${item}`).subscribe((config) => console.log(config,'deleted'));

    window.location.href = "/alltimer"

}

  

}
