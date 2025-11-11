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

  issueList: Issue[] = [
    {
      id: 1,
      name: "Ausgabe 1",
      link: "www.example.com"
    }

  ]

  getIssues(): Issue[] {
    return this.issueList;
  }

}
