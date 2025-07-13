import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { RoomService } from '../../services/room';
import { Core } from '../../services/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material-module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [AngularMaterialModule, NgFor],
})
export class HomeComponent implements OnInit {
  rooms: any[] = [];
  displayedColumns: string[] = [
    'room_id',
    'room_number',
    'room_type',
    'room_capacity',
    'room_price_per_hour',
    'room_floor_number',
    'room_is_available',
  ];

  constructor(private _roomService: RoomService, public core: Core) {}

  ngOnInit(): void {
    this._roomService.getRooms().subscribe((response) => {
      this.rooms = response;
    });
  }
}
