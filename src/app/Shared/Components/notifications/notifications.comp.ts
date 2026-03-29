
import { Component, inject, OnInit } from '@angular/core';
import { NotificationsSRV } from '../../../Core/Services/Notifications/notifications.srv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.comp.html',
  styleUrl: './notifications.comp.css',
})
export class NotificationsComp implements OnInit {
  private readonly notificationsSRV = inject(NotificationsSRV)

  notifications: any[] = []
  unreadCount: number = 0

  ngOnInit(): void {
    this.getNotifications()
    this.getUnreadCount()
  }

  getNotifications() {
    this.notificationsSRV.getNotifications().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.notifications = res.data.notifications
        }
      },
      error: (err: any) => {
        console.log('NOTIFICATIONS ERROR:', err)
      }
    })
  }

  getUnreadCount() {
    this.notificationsSRV.getUnreadCount().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.unreadCount = res.data.unreadCount
        }
      },
      error: (err: any) => {
        console.log('UNREAD COUNT ERROR:', err)
      }
    })
  }

  markAsRead(notificationId: string) {
    this.notificationsSRV.markAsRead(notificationId).subscribe({
      next: (res: any) => {
        if (res.success) {
          // update locally without re-fetching
          const notification = this.notifications.find(n => n._id === notificationId)
          if (notification) {
            notification.isRead = true
            this.unreadCount = Math.max(0, this.unreadCount - 1)
          }
        }
      },
      error: (err: any) => {
        console.log('MARK AS READ ERROR:', err)
      }
    })
  }

  getNotificationMessage(type: string, actorName: string): string {
    switch (type) {
      case 'comment_post': return `${actorName} commented on your post`
      case 'like_post': return `${actorName} liked your post`
      default: return `${actorName} interacted with your post`
    }
  }
}