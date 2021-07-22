import { NodeEntry, Node } from '@alfresco/js-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent  {
  currentUser:Node

  ngOnInit() {
    // Fetch werkt niet vanwege CORS error...
    // fetch('https://demo.incentro.digital/alfresco/api/-default-/public/alfresco/versions/1/people/to.annabelle@incentro.com')
    //   .then(response => response.json())
    //   .then(data => console.log(data))

    
  }

  
}
