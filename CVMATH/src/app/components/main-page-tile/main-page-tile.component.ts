import { Component, Input } from '@angular/core';
import { Tile } from '../../models/tile.model';


@Component({
  selector: 'app-main-page-tile',
  standalone: true,
  imports: [],
  templateUrl: './main-page-tile.component.html',
  styleUrl: './main-page-tile.component.scss'
})
export class MainPageTileComponent {
  @Input() tile! : Tile;

  ngOnInit() {
      
    
  }
}
