import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Client } from '../../services/api';
import { SocketsService } from '../../services/sockets';
import { SessionFactory } from '../../services/session';
import { MindsTitle } from '../../services/ux/title';

import { CommonModule } from '../../common/common.module';

import { NotificationsFlyoutComponent } from './flyout.component';
import { NotificationsTopbarToggleComponent } from './toggle.component';
import { NotificationComponent } from './notification.component';
import { NotificationsComponent } from './notifications.component';

import { NotificationService } from './notification.service';


@NgModule({
  imports: [
    NgCommonModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'notifications/:filter', component: NotificationsComponent },
      { path: 'notifications', component: NotificationsComponent }
    ])
  ],
  declarations: [
    NotificationsFlyoutComponent,
    NotificationsComponent,
    NotificationComponent,
    NotificationsTopbarToggleComponent
  ],
  providers: [
    {
      provide: NotificationService,
      useFactory: NotificationService._,
      deps: [ Client, SocketsService, MindsTitle ]
    }
  ],
  exports: [
    NotificationsFlyoutComponent,
    NotificationsComponent,
    NotificationComponent,
    NotificationsTopbarToggleComponent
  ]
})

export class NotificationModule {
}
