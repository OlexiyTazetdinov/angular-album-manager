import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.scss']
})
export class AlbumPreviewComponent implements OnInit {

  @Input()
  public albumId: string;

  album$: Observable<any>;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.album$ = this.albumService.getAlbum(this.albumId);
  }

}
