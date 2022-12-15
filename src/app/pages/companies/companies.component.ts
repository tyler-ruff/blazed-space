import { Component, OnInit } from '@angular/core';

import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [
    {
      name: "Blazed Labs LLC",
      description: "We turn Dreams into Reality!",
      industry: "Software Development",
      location: "New Jersey, USA",
      email: "hello@blazed.space",
      url: "https://blazed.company/",
      phone: "+18557882348",
      logo: "https://blazed.sirv.com/logo/Beaker-Dark.png",
      entityId: "0450452884"
    },
    {
      name: "Concrete Games LLC",
      description: "A solid game development studio.",
      industry: "Game Development",
      location: "New Jersey, USA",
      email: "hello@blazed.games",
      url: "https://blazed.games/",
      phone: "+18882008103",
      logo: "https://blazed.sirv.com/blazed.games/Concrete-Games-White.png",
      entityId: "0450847331"
    },
    {
      name: "RTM Transportation LLC",
      description: "Moving America forward.",
      industry: "Logistics",
      location: "New Jersey, USA",
      email: "hello@rtmtransit.com",
      url: "https://rtmtransit.com/",
      phone: "+16092149678",
      logo: "https://blazed.sirv.com/RTM/logo/RTM-Transit-Square.png",
      entityId: "0450194330"
    },
    {
      name: "Ruff Management Inc.",
      description: "Hard working people choose Ruff.",
      industry: "Asset Management",
      location: "New Jersey, USA",
      email: "hello@ruff-manage.com",
      url: "https://rtmtransit.com/",
      phone: "+18338870061",
      logo: "https://blazed.sirv.com/ruff-manage.com/ruff-lion.png",
      entityId: "0450842898"
    }
  ] as Company[];
  constructor() { }

  ngOnInit(): void {
  }

}
