import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HeaderComponent } from './header/header.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { MemberComponent } from './member/member.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentsComponent } from './students/students.component';
import { FooterComponent } from './footer/footer.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LeavenotificationComponent } from './leavenotification/leavenotification.component';
import { JobdescComponent } from './jobdesc/jobdesc.component';
import { NewleaveComponent } from './newleave/newleave.component';
import { LeavearchiveComponent } from './leavearchive/leavearchive.component';
const appRoutes: Routes = [
  {
    path: 'staff/login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: MemberComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'dashboard/myaccount',
    component: MyaccountComponent,
  },
  {
    path: 'dashboard/notification',
    component: LeavenotificationComponent,
  },
  {
    path: 'dashboard/jobdesc',
    component: JobdescComponent,
  },
   {
    path: 'dashboard/newleave',
    component: NewleaveComponent,
  },
   {
    path: 'dashboard/archive',
    component: LeavearchiveComponent,
  },
 {
    path: '',
    redirectTo: 'staff/login', pathMatch: 'full'
  }
  
];
@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    HeaderComponent,
    PostDetailsComponent,
    LoginComponent,
    MemberComponent,
    SidebarComponent,
    StudentsComponent,
    FooterComponent,
    MyaccountComponent,
    LeavenotificationComponent,
    JobdescComponent,
    NewleaveComponent,
    LeavearchiveComponent

  ],
  imports: [
    BrowserModule,FormsModule,StorageServiceModule,HttpModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
