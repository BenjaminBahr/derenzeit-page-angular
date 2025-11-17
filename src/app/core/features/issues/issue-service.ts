import {Injectable} from '@angular/core';

export interface Issue {
  id: number,
  name: string,
  link: string,
  fileName: string,
}

@Injectable({
  providedIn: 'root',
})
export class IssueService {

  filePath = `../../shared/`;
  fileEnding = `.webp`;

  issueList: Issue[] = [
    {
      id: 15,
      link: `https://www.ulisses-ebooks.de/en/product/538755/derenzeit-ausgabe-015-1047-bf`,
      name: `Ausgabe 15`,
      fileName: this.filePath + 'DZ_15' + this.fileEnding,
    },
    {
      id: 14,
      link: `https://www.ulisses-ebooks.de/product/529327/DERENZEIT--Ausgabe-014--1046-BF`,
      name: `Ausgabe 14`,
      fileName: this.filePath + 'DZ_14' + this.fileEnding,
    },
    {
      id: 13,
      link: `https://www.ulisses-ebooks.de/product/517126/DERENZEIT--Ausgabe-013--1046-BF`,
      name: `Ausgabe 13`,
      fileName: this.filePath + 'DZ_13' + this.fileEnding,
    },
    {
      id: 12,
      link: `https://www.ulisses-ebooks.de/product/506353/DERENZEIT--Ausgabe-012`,
      fileName: this.filePath + 'DZ_12' + this.fileEnding,
      name: `Ausgabe 12`,
    },
    {
      id: 11,
      link: `https://www.ulisses-ebooks.de/product/487456/DERENZEIT--Ausgabe-011--1008-BF`,
      fileName: this.filePath + 'DZ_11' + this.fileEnding,
      name: `Ausgabe 11`,
    },
    {
      id: 10,
      link: `https://www.ulisses-ebooks.de/product/476054/DERENZEIT--Ausgabe-010--1038-BF`,
      fileName: this.filePath + 'DZ_10' + this.fileEnding,
      name: `Ausgabe 10`,
    },
    {
      id: 9,
      link: `https://www.ulisses-ebooks.de/product/464627/DERENZEIT--Ausgabe-009--1044-BF`,
      fileName: this.filePath + 'DZ_09' + this.fileEnding,
      name: `Ausgabe 9`,
    },
    {
      id: 8,
      link: `https://www.ulisses-ebooks.de/product/455708/DERENZEIT--Ausgabe-008--1044-BF`,
      fileName: this.filePath + 'DZ_08' + this.fileEnding,
      name: `Ausgabe 8`,
    },
    {
      id: 7,
      link: `https://www.ulisses-ebooks.de/product/443699/DERENZEIT--Ausgabe-007--1039-BF`,
      fileName: this.filePath + 'DZ_07' + this.fileEnding,
      name: `Ausgabe 7`,
    },
    {
      id: 6.5,
      link: `https://www.ulisses-ebooks.de/product/432389/DERENZEIT--Ausgabe-0065--Travia-1041-BF`,
      fileName: this.filePath + 'DZ_April_1041' + this.fileEnding,
      name: `Aprilausgabe 2023`,
    },
    {
      id: 6,
      link: `https://www.ulisses-ebooks.de/product/429354/DERENZEIT--Ausgabe-006--1044-BF`,
      fileName: this.filePath + 'DZ_06' + this.fileEnding,
      name: `Ausgabe 6`,
    },
    {
      id: 5,
      link: `https://www.ulisses-ebooks.de/product/420954/DERENZEIT--Ausgabe-005--1044-BF`,
      fileName: this.filePath + 'DZ_05' + this.fileEnding,
      name: `Ausgabe 5`,
    },
    {
      id: 4,
      link: `https://www.ulisses-ebooks.de/product/414522/DERENZEIT--Ausgabe-004--1045-BF`,
      fileName: this.filePath + 'DZ_04' + this.fileEnding,
      name: `Ausgabe 4`,
    },
    {
      id: 3,
      link: `https://www.ulisses-ebooks.de/product/401305/DERENZEIT--Ausgabe-003--1044-BF`,
      fileName: this.filePath + 'DZ_03' + this.fileEnding,
      name: `Ausgabe 3`,
    },
    {
      id: 2,
      link: `https://www.ulisses-ebooks.de/product/392010/DERENZEIT--Ausgabe-002--1043-BF`,
      fileName: this.filePath + 'DZ_02' + this.fileEnding,
      name: `Ausgabe 2`,
    },
    {
      id: 1,
      link: `https://www.ulisses-ebooks.de/product/381263/DERENZEIT--Ausgabe-001--1042-BF`,
      fileName: this.filePath + 'DZ_01' + this.fileEnding,
      name: `Ausgabe 1`,
    },
  ];

  getIssues(): Issue[] {
    return this.issueList;
  }

}
