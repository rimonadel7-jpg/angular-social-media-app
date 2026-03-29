

import { Component, inject, OnInit } from '@angular/core';
import { ProfileSRV } from '../../../Core/Services/Profile/profile.srv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.comp.html',
  styleUrl: './profile.comp.css',
})
export class ProfileComp implements OnInit {
  private readonly profileSRV = inject(ProfileSRV)

  profileData: any = null
  myPosts: any[] = []
  bookmarks: any[] = []
  activeTab: 'posts' | 'saved' = 'posts'

  ngOnInit(): void {
    this.getMyProfile()
    this.getBookmarks()
  }

  getMyProfile() {
    this.profileSRV.getMyProfile().subscribe({
      next: (res) => {
        if (res.success) {
          this.profileData = res.data.user
          this.getMyPosts(res.data.user._id)
        }
      },
      error: (err) => console.log('PROFILE ERROR:', err)
    })
  }

  getMyPosts(userId: string) {
    this.profileSRV.getMyPosts(userId).subscribe({
      next: (res: any) => {
        if (res.success) this.myPosts = res.data.posts
      },
      error: (err: any) => console.log('MY POSTS ERROR:', err)
    })
  }

  getBookmarks() {
    this.profileSRV.getBookmarks().subscribe({
      next: (res) => {
        if (res.success) this.bookmarks = res.data.bookmarks
      },
      error: (err) => console.log('BOOKMARKS ERROR:', err)
    })
  }

  uploadPhoto(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const file = input.files[0]
      this.profileSRV.uploadPhoto(file).subscribe({
        next: (res) => {
          console.log('UPLOAD RESPONSE:', res)
          if (res.success) {
            // update profile photo locally without re-fetching
            this.profileData.photo = res.data.user.photo
          }
        },
        error: (err) => console.log('UPLOAD ERROR:', err)
      })
    }
  }
}