import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  styleUrls: ['./content-list.component.css']
})


export class ContentListComponent {
  contentItems: Content[] = []; 
  searchTitle: string = '';
  searchResultMessage: string = '';
  searchResultColor: string = '';

  searchContentByTitle(): void {
    const foundContent = this.contentItems.find(item => this.content.id === this.searchTitle);
    if (foundContent) {
      this.searchResultMessage = `Content with title '${this.searchTitle}' exists.`;
      this.searchResultColor = 'green';
    } else {
      this.searchResultMessage = `Content with title '${this.searchTitle}' does not exist.`;
      this.searchResultColor = 'red';
    }
  }
}

export class ContentListComponent implements OnInit {
  contentList: ContentList;
  
  isFirstCard: boolean = false;

  constructor(){
    this.contentList=new ContentList;
  
    this.contentList.addItem({
    id:1,
    style:'Mexica',
    description:'Coocked with tomatoe, onion, salt',
    ingredients:'Chicken, tomatoe, salt, onion',
    imgURL:'',
    taste:'Salad',
    });
    this.contentList.addItem({
    
      id:2,
      style:'Mexica',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });
    this.contentList.addItem({
    
      id:3,
      style:'Mexican',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });
    this.contentList.addItem({
    
      id:4,
      style:'Mexican',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });
    this.contentList.addItem({
    
      id:5,
      style:'Mexican',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });
    this.contentList.addItem({
    
      id:6,
      style:'Mexican',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });
    this.contentList.addItem({
    
      id:7,
      style:'Mexican',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });
   
    
  }

  ngOnInit(){
  

  }
}