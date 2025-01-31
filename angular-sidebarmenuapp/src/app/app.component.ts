import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sidebarmenuapp';

  sidebar: string = 'sidebar close';

  showsubmenu: string = '';

  sideMenu: any [] = [
    {
      title: 'App',
      class: '',
      children: [
        {title: 'Dashboard', route: 'dashboard'},
        {title: 'Analytics', route: 'dashboard'},
        {title: 'Marketing', route: 'dashboard'}
      ]
    },
    {
      title: 'Home',
      class: '',
      children: [
        {title: 'Dashboard', route: 'dashboard'},
        {title: 'Analytics', route: 'dashboard'},
        {title: 'Marketing', route: 'dashboard'}
      ]
    },
    {
      title: 'Employee',
      children: [
        {title: 'New Employee', route: 'employee'},
        {title: 'Employee List', route: 'employee'}
      ]
    },
    {
      title: 'Master',
      children: [
        {title: 'City', route: 'new-employee'},
        {title: 'State', route: 'emp-list'},
        {title: 'District', route: 'emp-list'},
        {title: 'Dropdown', route: 'emp-list'},
        {title: 'Designations', route: 'emp-list'},
      ]
    }
  ]

  OnClick(){
    if(this.sidebar === 'sidebar close'){
      this.sidebar = 'sidebar';
    } else {
      this.sidebar = 'sidebar close';
    }
  }

  OnArrowKeyClick(){
    if(this.showsubmenu === ''){
      this.showsubmenu = 'showMenu';
    } else {
      this.showsubmenu = '';
    }
  }



}
