import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AlbumService} from './services/album.service';
import {Observable} from 'rxjs';
import {AuthService} from '../core/auth/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  public albums$: Observable<any>;
  public albums: any[];
  public userName: string;


  constructor(private albumService: AlbumService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.userName = JSON.parse(this.authService.retrieveUser()).name;
    this.albums$ = this.albumService.getAlbums();
  }

}
