import { Component, OnInit } from '@angular/core';
import { LoadContentsService } from 'src/app/services/load-contents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public isSearchBarOpened: boolean = false;
  public prefButtonIsClicked: boolean = false;

  posts: object[] = [];

  constructor(private router: Router, private contentService: LoadContentsService) {}

  ngOnInit() {
    this.contentService.getData('best.json').subscribe((response) => {
      console.log(response.data.children);
      this.posts = response.data.children;
    });
  }

  goToDetails(post: any) {
    this.contentService.post = post;
    this.router.navigateByUrl('/detail');
  }

  replaceImage(image: string): string {
    return (image.match('.jpg')) ? image : 'https://www.redditstatic.com/avatars/avatar_default_09_FF8717.png';
  }
}
