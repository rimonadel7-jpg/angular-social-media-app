

import { Component, inject, Input, OnInit } from '@angular/core';
import { CommentsSRV } from '../../../Core/Services/Comments/comments.srv';

@Component({
  selector: 'app-comments',
  imports: [], 
  templateUrl: './comments.comp.html',
  styleUrl: './comments.comp.css',
})
export class CommentsComp implements OnInit {
  private readonly commentsSRV = inject(CommentsSRV)

  @Input() postId!: string
  postlist: any[] = []

commentsList:any[]=[]


  // ngOnInit(): void {
  //   this.getPostComments()
  // }

  ngOnInit(): void {
  console.log('token:', localStorage.getItem('access-token')); // add this
  console.log('postId:', this.postId); // add this too
  this.getPostComments();
}


  // getPostComments() {
  //   this.commentsSRV.getPostsComments(this.postId).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //       if (res.success) {
  //         this.postlist = res.data.comments
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
  // }

getPostComments() {
  this.commentsSRV.getPostsComments(this.postId).subscribe({
    next: (res) => {
      console.log(res)
      if (res.success) {
        this.commentsList = res.data.comments
      }
    },
    error: (err) => {
      console.log(err)
    }
  })
}
}