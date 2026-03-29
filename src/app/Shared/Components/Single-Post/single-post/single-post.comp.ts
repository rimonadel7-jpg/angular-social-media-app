

// import { Component, inject, OnInit } from '@angular/core';
// import { IPost } from '../../../../Core/Models/IPost/ipost.IFace';
// import { PostsSRV } from '../../../../Core/Services/Posts/posts.srv';
// import { CommentsComp } from "../../comments/comments.comp";
// import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommentsSRV } from '../../../../Core/Services/Comments/comments.srv';
// import { RouterLink } from "@angular/router";
// import { ToastrService } from 'ngx-toastr';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { DatePipe } from '@angular/common';
// import { SayHelloPipe } from '../../../Pipes/sayHello/say-hello-pipe';

// @Component({
//   selector: 'app-single-post',
//   imports: [CommentsComp, ReactiveFormsModule, RouterLink,DatePipe,SayHelloPipe],
//   templateUrl: './single-post.comp.html',
//   styleUrl: './single-post.comp.css',
// })

// export class SinglePostComp implements OnInit {

//   private readonly postsrv = inject(PostsSRV);
//   private readonly commentsSRV = inject(CommentsSRV);
//   private readonly toastr = inject(ToastrService)
//   private readonly spinner = inject(NgxSpinnerService)

//   commentValue: FormControl = new FormControl(null, [Validators.required]);


//   postlist: IPost[] = []

//   ngOnInit(): void {
//     this.getPosts()
//   }

//   getPosts() {
//     // show loading screen
//     this.spinner.show()

//     this.postsrv.getAllPosts().subscribe({
//       next: (res) => {
//         if (res.success) {
//           this.postlist = res.data.posts
//           // console.log('this-postlist')
//           this.toastr.success(res.message, 'socialmedia')


//           // hide loading screen
//           this.spinner.hide()
//         }
//       },
//       error: (err) => {
//         console.log(err)
//         this.spinner.hide()
//       }
//     })
//   }


//   createComment(e: SubmitEvent, postId: any) {
//     e.preventDefault()
//     // console.log('elolol');
//     if (this.commentValue.valid) {

//       //  prepare formdata

//       let formdata = new FormData  // empty container
//       formdata.append('content', this.commentValue.value)


//       this.commentsSRV.CreatePostsComments(postId, formdata).subscribe({
//         next: (res) => {
//           console.log(res);
//           if (res.success) {
//             // clear input value , getpostcomments 
//                 this.commentValue.reset()


//                   // refresh posts
//     this.getPosts()

//         // show success message
//     this.toastr.success(res.message, 'socialmedia')

//           }

//         },
//         error: (err) => {
//           console.log(err);
//         },
//         complete: () => {
//         }
//       }
//       )
//     }

//   }
// }


import { Component, inject, OnInit } from '@angular/core';
import { IPost } from '../../../../Core/Models/IPost/ipost.IFace';
import { PostsSRV } from '../../../../Core/Services/Posts/posts.srv';
import { CommentsComp } from "../../comments/comments.comp";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentsSRV } from '../../../../Core/Services/Comments/comments.srv';
import { RouterLink } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { SayHelloPipe } from '../../../Pipes/sayHello/say-hello-pipe';

@Component({
  selector: 'app-single-post',
  imports: [CommentsComp, ReactiveFormsModule, RouterLink, DatePipe, SayHelloPipe],
  templateUrl: './single-post.comp.html',
  styleUrl: './single-post.comp.css',
})
export class SinglePostComp implements OnInit {

  private readonly postsrv = inject(PostsSRV);
  private readonly commentsSRV = inject(CommentsSRV);
  private readonly toastr = inject(ToastrService)
  private readonly spinner = inject(NgxSpinnerService)

  commentValue: FormControl = new FormControl(null, [Validators.required]);
  postlist: IPost[] = []

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.spinner.show()
    this.postsrv.getAllPosts().subscribe({
      next: (res) => {
        if (res.success) {
          this.postlist = res.data.posts
          this.toastr.success(res.message, 'socialmedia')
          this.spinner.hide()
        }
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
      }
    })
  }

  likeUnlikePost(postId: string) {
    this.postsrv.likeUnlikePost(postId).subscribe({
      next: (res) => {
        if (res.success) {
          // update locally without re-fetching
          const post = this.postlist.find(p => p._id === postId)
          if (post) {
            const isLiked = res.data.post.likes.includes(postId)
            post.likesCount = res.data.post.likesCount
          }
        }
      },
      error: (err) => console.log('LIKE ERROR:', err)
    })
  }

  createComment(e: SubmitEvent, postId: any) {
    e.preventDefault()
    if (this.commentValue.valid) {
      let formdata = new FormData()
      formdata.append('content', this.commentValue.value)
      this.commentsSRV.CreatePostsComments(postId, formdata).subscribe({
        next: (res) => {
          if (res.success) {
            this.commentValue.reset()
            this.getPosts()
            this.toastr.success(res.message, 'socialmedia')
          }
        },
        error: (err) => console.log(err)
      })
    }
  }
}