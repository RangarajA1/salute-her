import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  @Input() title : string;
  @Input() content: string;
  constructor(
    private modalCtr: ModalController,
  ) { }

  ngOnInit() {
  }
  async close() {
    
    await this.modalCtr.dismiss();
  }

}
