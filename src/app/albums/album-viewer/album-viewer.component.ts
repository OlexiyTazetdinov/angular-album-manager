import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-album-viewer',
  templateUrl: './album-viewer.component.html',
  styleUrls: ['./album-viewer.component.scss']
})
export class AlbumViewerComponent implements OnInit {

  public id: string;

  private album$: Observable<any>;

  private photos$: Observable<any>;

  constructor(private albumService: AlbumService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.album$ = this.albumService.getAlbum(this.id);
    this.photos$ = this.albumService.getPhotosFromAlbum(this.id);
  }

}
