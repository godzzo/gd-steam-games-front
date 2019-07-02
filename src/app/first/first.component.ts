import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  rows: any;

  constructor( private activatedRoute: ActivatedRoute ) {
    activatedRoute.data.subscribe(data => {
        console.log('data', data);
        // this.data = data;

        this.rows = data.games.map(row => {
          if (row.name) {
            return {
              id: row.steam_appid,
              name: row.name,
              categories: row.categories ? row.categories.map(e => e.description).join(',') : '',
              genres: row.genres ? row.genres.map(e => e.description).join(',') : '',
              platforms: Object.keys(row.platforms).join(','),
              header_image: row.header_image,
              playtime_forever: row.playtime_forever,
              type: row.type,
              recommendations: row.recommendations ? row.recommendations.total : 0
            };
          } else {
            return {
              id: row.appid,
              name: 'NOT FOUND!',
              categories: '',
              genres: '',
              platforms: '',
              header_image: '',
              playtime_forever: row.playtime_forever,
              type: 'DONT KNOWN',
              recommendations: 0
            };
          }
        });
    });
  }

  ngOnInit() {
  }

}
