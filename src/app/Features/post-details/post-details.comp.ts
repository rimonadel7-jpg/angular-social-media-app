import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsSRV } from '../../Core/Services/Posts/posts.srv';
import { CommentsComp } from "../../Shared/Components/comments/comments.comp";
import { IPost } from '../../Core/Models/IPost/ipost.IFace';

@Component({
  selector: 'app-post-details',
  imports: [CommentsComp],
  templateUrl: './post-details.comp.html',
  styleUrl: './post-details.comp.css',
})
export class PostDetailsComp implements OnInit {

  post!: IPost
  private readonly postsSRV = inject(PostsSRV)

  private readonly activatedRoute = inject(ActivatedRoute)
  postId: string | null = null;


  ngOnInit(): void {
    this.getPostIdFromRoute()
  }

  getPostIdFromRoute() {
    this.activatedRoute.paramMap.subscribe((urlPath) => {

      if (urlPath.get('id')) {
        this.postId = urlPath.get('id')
        this.getPostDetails()
      }
    })
  }

  getPostDetails() {
    this.postsSRV.getSinglePost(this.postId).subscribe({
      next: (res) => {
        this.post = res.data.post
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
