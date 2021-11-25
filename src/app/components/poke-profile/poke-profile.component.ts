import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';
@Component({
  selector: 'app-poke-profile',
  templateUrl: './poke-profile.component.html',
  styleUrls: ['./poke-profile.component.scss']
})
export class PokeProfileComponent implements OnInit {
  public pokeData
  public baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private pokeService: PokeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['pokeUrl'].split(':')[1]
    this.pokeService.getPoke(this.baseUrl+id).subscribe(res => {
      this.pokeData = res
      console.log(this.pokeData)
    })
    console.log(this.pokeData);
    
  }

}
