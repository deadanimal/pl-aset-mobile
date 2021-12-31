import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreLayoutPage } from './core-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CoreLayoutPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'kewpa21-view/:kewpa21_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa21/view/view.module').then(m => m.ViewPageModule)
          }
        ]
      },
      {
        path: 'kewpa11-view/:kewpa11_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa11/view/view.module').then(m => m.ViewPageModule)
          }
        ]
      },
      {
        path: 'kewpa8-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa8/list/list.module').then(m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'kewpa8-create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa8/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa9-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa9/list/list.module').then(m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'kewpa10a-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa10a/list/list.module').then(m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'kewpa10b-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa10b/list/list.module').then(m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'kewpa11-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa11/list/list.module').then(m => m.ListPageModule)
          }
        ]
      },

      {
        path: 'kewpa21-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa21/list/list.module').then(m => m.ListPageModule)
          }
        ]
      },

      {
        path: 'kewpa9-create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa9/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa10a-create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa10a/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa10b-create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa10b/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa11-create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa11/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa21-create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa21/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },


      {
        path: 'kewpa8-edit/:kewpa8_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa8/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },


      {
        path: 'kewpa9-edit/:kewpa9_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa9/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa10a-edit/:kewpa10a_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa10a/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa10b-edit/:kewpa10b_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa10b/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa11-edit/:kewpa11_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa11/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'kewpa21-edit/:kewpa21_id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/kewpa21/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },

      // utils route
      {
        path: 'pengumuman',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/pengumuman/pengumuman.module').then(m => m.PengumumanPageModule)
          }
        ]
      },

      {
        path: 'homepage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/homepage/homepage.module').then(m => m.HomepagePageModule)
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/core/homepage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/core/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CoreLayoutPageRoutingModule {}
