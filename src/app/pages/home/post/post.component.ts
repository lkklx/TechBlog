import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostsService } from '../../../shared/services/posts.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost = async () => {
    let id = '';
    this.route.params
      .subscribe((params: any) => {
        id = (params['id']).trim();
      }
      )
    this.post = await this.postsService.getPost(id)
  }
}
