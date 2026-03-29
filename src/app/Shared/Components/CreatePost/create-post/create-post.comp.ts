
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsSRV } from '../../../../Core/Services/Posts/posts.srv';


@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.comp.html',
  styleUrl: './create-post.comp.css',
})
export class CreatePostComp {

  // 1. prepare uploaded file ( image )
  uplodedFile: any;

  prepareUploadedFile(e: Event) {
    let input = e.target as HTMLInputElement
    if (input) {
      if (input.files) {
        this.uplodedFile = input.files[0]
      }
    }
  }

  // 2. prepare input ( body )
  postDescribtion: FormControl = new FormControl(null, [Validators.required])

  // 3. create post
  createPost(e: SubmitEvent) {
    e.preventDefault()

    let formData = new FormData()
    formData.append('body', this.postDescribtion.value)

    if (this.uplodedFile) {
      formData.append('image', this.uplodedFile)
    }

    this.PostsSRV.createPost(formData).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  // 4. api
  private readonly PostsSRV = inject(PostsSRV)


}