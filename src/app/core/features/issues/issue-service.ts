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
      id: 14,
      link: `https://www.ulisses-ebooks.de/product/529327/DERENZEIT--Ausgabe-014--1046-BF`,
      name: `Ausgabe 14`
    },
    {
      id: 13,
      link: `https://www.ulisses-ebooks.de/product/517126/DERENZEIT--Ausgabe-013--1046-BF`,
      name: `Ausgabe 13`
    },
    {
      id: 12,
      link: `https://www.ulisses-ebooks.de/product/506353/DERENZEIT--Ausgabe-012`,
      name: `Ausgabe 12`
    },
    {
      id: 11,
      link: `https://www.ulisses-ebooks.de/product/487456/DERENZEIT--Ausgabe-011--1008-BF`,
      name: `Ausgabe 11`
    },
    {
      id: 10,
      link: `https://www.ulisses-ebooks.de/product/476054/DERENZEIT--Ausgabe-010--1038-BF`,
      name: `Ausgabe 10`
    },
    {
      id: 9,
      link: `https://www.ulisses-ebooks.de/product/464627/DERENZEIT--Ausgabe-009--1044-BF`,
      name: `Ausgabe 9`
    },
    {
      id: 8,
      link: `https://www.ulisses-ebooks.de/product/455708/DERENZEIT--Ausgabe-008--1044-BF`,
      name: `Ausgabe 8`
    },
    {
      id: 7,
      link: `https://www.ulisses-ebooks.de/product/443699/DERENZEIT--Ausgabe-007--1039-BF`,
      name: `Ausgabe 7`
    },
    {
      id: 6.5,
      link: `https://www.ulisses-ebooks.de/product/432389/DERENZEIT--Ausgabe-0065--Travia-1041-BF`,
      name: `Aprilausgabe 2023`
    },
    {
      id: 6,
      link: `https://www.ulisses-ebooks.de/product/429354/DERENZEIT--Ausgabe-006--1044-BF`,
      name: `Ausgabe 6`
    },
    {
      id: 5,
      link: `https://www.ulisses-ebooks.de/product/420954/DERENZEIT--Ausgabe-005--1044-BF`,
      name: `Ausgabe 5`
    },
    {
      id: 4,
      link: `https://www.ulisses-ebooks.de/product/414522/DERENZEIT--Ausgabe-004--1045-BF`,
      name: `Ausgabe 4`
    },
    {
      id: 3,
      link: `https://www.ulisses-ebooks.de/product/401305/DERENZEIT--Ausgabe-003--1044-BF`,
      name: `Ausgabe 3`
    },
    {
      id: 2,
      link: `https://www.ulisses-ebooks.de/product/392010/DERENZEIT--Ausgabe-002--1043-BF`,
      name: `Ausgabe 2`
    },
    {
      id: 1,
      link: `https://www.ulisses-ebooks.de/product/381263/DERENZEIT--Ausgabe-001--1042-BF`,
      name: `Ausgabe 1`
    },
  ];

  getIssues(): Issue[] {
    return this.issueList;
  }

}
