import { Component, input } from '@angular/core';
import { MainPageTileComponent} from '../main-page-tile/main-page-tile.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainPageService } from '../../services/main-page.service'; 
import { Tile } from '../../models/tile.model';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainPageTileComponent, HeaderComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

   tiles!:Tile[];

  
    constructor(private mainPageservice:MainPageService)
    {}


    ngOnInit(): void {
      this.tiles = this.mainPageservice.getMainPageTiles();
  }
  

}
