
import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { OnInit } from '@angular/core';
import { CreatePostComp } from "../../Shared/Components/CreatePost/create-post/create-post.comp";
import { SinglePostComp } from "../../Shared/Components/Single-Post/single-post/single-post.comp";
import { PostsSRV } from '../../Core/Services/Posts/posts.srv';
import { IPost } from '../../Core/Models/IPost/ipost.IFace';

@Component({
  selector: 'app-home',
  imports: [CreatePostComp, SinglePostComp],
  templateUrl: './home.comp.html',
  styleUrl: './home.comp.css',
})
export class HomeComp implements OnInit {

  private readonly platformId = inject(PLATFORM_ID)
  private readonly postsSRV = inject(PostsSRV)

  postList: IPost[] = []

  ngOnInit(): void {
    this.getToken()
    // this.getPosts()
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      let token = localStorage.getItem('token')
      console.log('token', token);
    }
  }

  getPosts() {
    this.postsSRV.getAllPosts().subscribe({
      next: (res) => {
        console.log(res)
        if (res.success) {
          this.postList = res.data.posts
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}