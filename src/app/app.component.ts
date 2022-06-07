import { Component } from '@angular/core';
import { Database, set, ref, update, onValue,remove } from '@angular/fire/database';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-demoo';

  constructor(public database:Database ){}

  registerUser(value: any) {
    //create data
    // set(ref(this.database, 'users/' + value.username), {
    //   username: value.username,
    //   first_name: value.first_name,
    //   profile_picture : value.last_name 
    // });   
    // alert('user created!');

    // read data
    const starCountRef = ref(this.database, 'users/' + value.username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();  

      alert(data.first_name);   
    });   

    // update data
    // update(ref(this.database, 'users/' + value.username), {
    //   // username: value.username,
    //   first_name: value.first_name,
    //   last_name: value.last_name
    // });
    // alert('user updated!');  
    
    //remove data
    // remove(ref(this.database, 'users/' + value.username));
    // alert('removed');
  }

  readUser(value:any){

  }
}
