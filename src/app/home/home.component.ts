import { SatellitesService } from './../services/satellites.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  satellites :any
  filterTerm!: string;


  constructor(private service: SatellitesService) { }

  ngOnInit(): void {
    this.service.getPosts()
        .subscribe(response => {
          console.log(response);
          this.satellites = response;

        });

  }




  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

}
