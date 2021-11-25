import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss']
})
export class PokePageComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public items = [];
  public pokeData;
  public searchResult  = []
  public selectValue = new FormControl();
  constructor(private pokeService: PokeService,private router: Router) { }

  ngOnInit(): void {
    this.pokeService.getPokeData().subscribe(res => {
      this.items = res.results
      
      for(let item of this.items) {
        this.pokeService.getPoke(item.url).subscribe(res => {
          this.pokeData = res
          this.searchResult.push(this.pokeData)
        })
      }
    })
    

  }
  openPokeProfile(event:string) {
    this.pokeService.getPoke(event).subscribe(res => {
      this.pokeData = res
    })
    if(this.pokeData?.id){
      this.router.navigate([`/poke-profile/:${this.pokeData.id}`])
    }
  }
  searchByType() {
    let newPokeArray = [];
    for(let item of this.searchResult) {
      for(let type of item.types) {
        if(type.type.name == this.selectValue.value.toLowerCase()) {
          newPokeArray.push(item)
        }
      }
    }
    this.items = newPokeArray
    console.log(this.items)
  }
}
