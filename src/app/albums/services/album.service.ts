import {Injectable} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {FacebookService} from 'ngx-facebook';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AlbumService {

  constructor(private authService: AuthService,
              private facebookService: FacebookService) {
  }


  getAlbums() {
    return from(this.facebookService.api('/me/albums')).pipe(map((res) => res.data));
  }

  getAlbum(albumId) {
    return from(this.facebookService.api(`/${albumId}?fields=name,cover_photo, count, updated_time`));
  }

  getPhoto(photoId) {
    return from(this.facebookService.api(`/${photoId}?fields=images`));
  }

  getPhotosFromAlbum(albumId) {
    return from(this.facebookService.api(`/${albumId}/photos`)).pipe(map((res) => res.data));
  }
}
