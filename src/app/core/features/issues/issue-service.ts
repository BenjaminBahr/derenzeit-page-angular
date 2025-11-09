import {Injectable} from '@angular/core';

export interface Issue {
  id: number,
  name: string,
  link: string,
}

@Injectable({
  providedIn: 'root',
})
export class IssueService {

  getIssues(): Issue[] {
    return [
      {
        id: 1,
        name: "Ausgabe 1",
        link: "www.example.com"
      }

    ]
  }

}
