import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TimerPage } from '../timer/timer.page';
import { SettimerPage } from '../settimer/settimer.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,TimerPage,SettimerPage],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    const spanFolder:any = document.getElementById('spanFolder')

    if(window.location.pathname == "/timer") {

      spanFolder.innerHTML = "TIMER"

    } else if(window.location.pathname == "/settimer") {

      spanFolder.innerHTML = "SET TIMER"

    } else {

      spanFolder.innerHTML = "ALL TIMER"

    }

  }
}
