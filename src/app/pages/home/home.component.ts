import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../shared/services/posts.service";
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: any;
  length = 0;
  pageSlice = this.posts;


  constructor(public postsService: PostsService, public router: Router) {
    this.postsService.getData().subscribe((res) => {
      this.posts = res;
      this.length = res.length;
      this.pageSlice = res.slice(0, 4)
    })
  }
  pageSize = 4;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = true;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    console.log(e)
    const startIndex = e.pageIndex*e.pageSize;
    let endIndex = startIndex + e.pageSize;
    if (endIndex > this.length){
      endIndex = this.length;
    }
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.pageSlice = this.posts.slice(startIndex, endIndex);
  }

  goToVotes =(myParam:string = 'about')=> {
    const navigationDetails: string[] = [''];
    navigationDetails.push(myParam);
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }
}
