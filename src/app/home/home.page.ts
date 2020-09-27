import { Component } from '@angular/core';
import { ApiService, Arp } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arps: any;
  articles;


 artik = [
   {
      "id": 1,
      "imageUrl": "assets/resources/popularsports/d.jpg",
      "title": "Football/Soccer",
      "description": "Football/Soccer is the number 1 famous sport in the world, the total estimated fans are 3.5 Billion Fans"
   },
   {
     "id": 2,
     "imageUrl": "assets/resources/popularsports/cricket.jpg",
     "title": "Cricket",
     "description": "Cricket is the number 2 famous sport in the world, the total estimated fans are 2.5 Billion Fans"
   },
   {
     "id": 3,
     "imageUrl": "assets/resources/popularsports/bask.jpg",
     "title": "Basketball",
     "description": "Basketball is the number 3 famous sport in the world, the total estimated fans are 2.2 Billion Fans"
   },
   {
     "id": 4,
     "imageUrl": "assets/resources/popularsports/fieldhock.jpg",
     "title": "Field Hockey",
     "description": "Field Hockey is the number 4 famous sport in the world, the total estimated fans are 2 Billion Fans"
   },
   {
     "id": 5,
     "imageUrl": "assets/resources/popularsports/tennis.jpg",
     "title": "Tennis",
     "description": "Tennis is the number 5 famous sport in the world, the total estimated fans are 1 Billion Fans"
   },
   {
     "id": 6,
     "imageUrl": "assets/resources/popularsports/volleyball.jpg",
     "title": "Volleyball",
     "description": "Volleyball is the number 6 famous sport in the world, the total estimated fans are 900 Million Fans"
   },
   {
     "id": 7,
     "imageUrl": "assets/resources/popularsports/tabletennis.jpg",
     "title": "Table Tennis",
     "description": "Table Tennis is the number 7 famous sport in the world, the total estimated fans are 850 Million Fans"
   },
   {
     "id": 8,
     "imageUrl": "assets/resources/popularsports/baseball.jpg",
     "title": "Baseball",
     "description": "Baseball is the number 8 famous sport in the world, the total estimated fans are 500 Million Fans"

   },
   {
     "id": 9,
     "imageUrl": "assets/resources/popularsports/americal.jpg",
     "title": "Americal Football Rugby",
     "description": "Americal Football Rugby is the number 9 famous sport in the world, the total estimated fans are 410 Million Fans"
   },
   {
     "id": 10,
     "imageUrl": "assets/resources/popularsports/gold.jpg",
     "title": "Golf",
     "description": "Golf is the number 10 famous sport in the world, the total estimated fans are 390 Million Fans"
   }

]




  options  = {
    centeredSlides:true,
    slidePerView: 1,
    spaceBetween: -60,
    // speed:100,
    autoplay:true,

  }

  options1  = {
    centeredSlides:true,
    slidePerView: 1,
    spaceBetween: -60,
    // autoplay:true,

  }

  categories = {
    slidesPerView: 2.5,
  };


  constructor(
    private apiService: ApiService
  ) {}

    
    ionViewDidEnter(){
      this.apiService.getNews().subscribe((data) => {
        // console.log(data);
        this.articles = data['articles'];
      })
    }



    filterProductData(event: any){
      // this.apiService.getNews().subscribe(res =>{
      //   this.arps = res;
      //   const val = event.target.value;
      //   if(val && val.trim() !== ''){
      //     this.arps = this.arps.filter((articles) => {
      //       return (articles.title.toLowerCase().indexOf(val.toLowerCase()) >-1)
      //     })
      //   }
      // })
    }

}
