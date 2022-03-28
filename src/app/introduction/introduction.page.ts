import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import{PopoverPage} from '../popover/popover.page';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  private readonly URL = 'assets/data/introductionContent.txt';

  modalDataResponse: any;
  dataToDisplay: string;
  constructor(public modalCtrl: ModalController,public httpClient: HttpClient) {
    this.httpClient.get(this.URL)
    .subscribe((res: string) => {
      this.dataToDisplay =res;
      console.warn(this.dataToDisplay);
    });
  }
  ngOnInit() {
  }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: PopoverPage,
      componentProps: {
        'title':'Introduction',
        'content':this.dataToDisplay
      }
    });
modal.onDidDismiss().then((modalDataResponse) => {
  if (modalDataResponse !== null) {
    this.modalDataResponse = modalDataResponse.data;
    console.log('Modal Sent Data : '+ modalDataResponse.data);
  }
});

return await modal.present();
}

}
