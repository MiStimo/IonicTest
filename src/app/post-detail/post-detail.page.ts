import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadContentsService } from '../services/load-contents.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  post: any;

  constructor(private contentService: LoadContentsService) { }

  ngOnInit() {
    this.post = this.contentService.post;
  }

  fixImage(image: string) {

    return image.replace(new RegExp('&amp;', 'g'), '&');
  }

}
