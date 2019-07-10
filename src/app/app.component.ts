import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyBlog';

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDKYeI-3xTwfpM2iJSBXFjNNm74lsnsy0c",
      authDomain: "myblog-7250b.firebaseapp.com",
      databaseURL: "https://myblog-7250b.firebaseio.com",
      projectId: "myblog-7250b",
      storageBucket: "",
      messagingSenderId: "757894874232",
      appId: "1:757894874232:web:6d85a4b240d40da7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
