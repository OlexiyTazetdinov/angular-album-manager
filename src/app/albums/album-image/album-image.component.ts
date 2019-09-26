import {Component, Input, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.scss']
})
export class AlbumImageComponent implements OnInit {

  @Input()
  imageId: string;

  @Input()
  tooltipDisabled = false;


  image$: Observable<any>;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.image$ = this.albumService.getPhoto(this.imageId);
  }

}
