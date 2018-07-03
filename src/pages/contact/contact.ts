import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
    template: `
      <form (ngSubmit)="submit()">
        <ion-item>
          <ion-label>First Name</ion-label>
          <ion-input type="text" [(ngModel)]="todo.first" name="title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Last Name</ion-label>
          <ion-input type="text" [(ngModel)]="todo.last" name="title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>E-Mail</ion-label>
          <ion-input type="text" [(ngModel)]="todo.email" name="title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Phone Number</ion-label>
          <ion-input type="number" [(ngModel)]="todo.phone" name="title"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Can we text this number?</ion-label>
           <ion-checkbox checked="false"></ion-checkbox>
           </ion-item>

        <ion-item>
          <ion-label>Questions</ion-label>
          <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>
        </ion-item>
        <button ion-button type="submit" block>Submit</button>
      </form>
      `,
})
export class ContactPage {


  constructor(public navCtrl: NavController) {

  }

  todo = {}
    submit() {
      console.log(this.todo)
    }


}
