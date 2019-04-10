import { Component } from '@angular/core';
import * as firebase from'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyDQzDJk6xHed4IztXsEJu-HAiZYps1fqgM",
      authDomain: "bookshelves-f4f8a.firebaseapp.com",
      databaseURL: "https://bookshelves-f4f8a.firebaseio.com",
      projectId: "bookshelves-f4f8a",
      storageBucket: "bookshelves-f4f8a.appspot.com",
      messagingSenderId: "890173184593"
    };
    firebase.initializeApp(config);
  }
}
