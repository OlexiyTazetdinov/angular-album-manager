import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../albums/albums.component';
import {AlbumsRoutingModule} from './albums-routing.module';
import {AlbumService} from './services/album.service';
import { AlbumPreviewComponent } from './album-preview/album-preview.component';
import { AlbumImageComponent } from './album-image/album-image.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { AlbumViewerComponent } from './album-viewer/album-viewer.component';



@NgModule({
  declarations: [AlbumsComponent, AlbumPreviewComponent, AlbumImageComponent, AlbumViewerComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    AngularSvgIconModule
  ],
  providers: [AlbumService]
})
export class AlbumsModule { }
