import { Injectable } from '@angular/core';
import { Tile } from '../models/tile.model';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
    private Tiles : Tile[]= [
        new Tile(
          'Archibald',
          'Mon meilleur ami depuis toujours !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          0
        ),
        new Tile(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          1
        ),
        new Tile(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          2
        )
      ];


    getMainPageTiles(): Tile[]
    {
        return this.Tiles;
    }
  
}