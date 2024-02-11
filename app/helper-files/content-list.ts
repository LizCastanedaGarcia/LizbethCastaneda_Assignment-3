import { Content } from './content-interface';

export class ContentList {
private a:Content[]

constructor() {
    this.a=[];
}

get getContentArray() {
    return this.a
  }

addItem(i:Content) {
    this.a.push(i);
}

getContentHTML(i:number): string{
    let item:Content = this.a[i];
    return '<p>' + item.description + '<p>' + item.id + '<img url="' + item.imgURL + '"></img>';
}

getStyleForType(type: string): any {
    switch(type) {
      case 'style':
        return { 'color': 'green', 'background-color': 'lightgreen' };
      case 'description':
        return { 'color': 'blue', 'background-color': 'lightblue' };
      case 'ingredients':
        return { 'color': 'red', 'background-color': 'lightcoral' };
      default:
        return { 'color': 'black', 'background-color': 'lightgrey' };
    }
  }
  
}