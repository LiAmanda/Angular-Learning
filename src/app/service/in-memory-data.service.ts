import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const players = [
      { id: 1, BarredID: 2018070361,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300661,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 2, BarredID: 2018070362,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300662,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 3, BarredID: 2018070363,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300663,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 4, BarredID: 2018070364,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300664,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 5, BarredID: 2018070365,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300665,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 6, BarredID: 2018070366,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300666,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 7, BarredID: 2018070367,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300667,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
      { id: 8, BarredID: 2018070368,BarredStartTime: "2018-07-03 05:00",BarredEndTime: "2018-07-05 05:00",WynnId: 81300668,FamilyName: 'Mr. Nice',GivenName: "Given",Photo: "assets/image/GCM.png",Gender: "Male",Birthday: "1994-12-20",CountryOfNational: "China",PrimaryID:"1234567898",  Reason: "Reason", Comments: "Comments", BarredBy: "BarredBy", BarredAt: "BarredAt", ModifiedOn: "ModifiedOn"},
    ];
    return {players};
  }
}
