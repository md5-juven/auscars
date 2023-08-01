import { Component, EventEmitter, Output } from '@angular/core';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  vehicle: Vehicle[] = [];
  searchText: string  = "";

  @Output()
  searchTextBased: EventEmitter<string> = new EventEmitter<string>();

  searchVehicle(){
    this.searchTextBased.emit(this.searchText);
  }
}
