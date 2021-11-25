import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    
  ) { }
  activeClass:boolean=false
  parent=[
    {dis:true,link:'/import-data',icon:'home',menu:'Home',
  active: true},
    {dis:true,link:'/bucket',icon:'format_align_justify' , menu:'Orders',
    active: false},
    {dis:true,link:'/bucket',icon:'mail_outline' , menu:'Notification',active: false},

  //   {dis:false,icon:'mail_outline' ,menu:'Notification', 
  //   // children:[
  //   //   {link:'/infrastructure',icon:'check_circle' ,submenu:'notification'},
  //   // ]
  // },
    {dis:true,link:'/planned-data',icon:'help_outline' ,menu:'Help & Support', active: false},
    {dis:true,link:'/skills-management',icon:'settings' ,menu:'Settings',active: false},
  ];
  ngOnInit(): void {
  }
  activeclass(){ 
    this.activeClass=true
  }
}
