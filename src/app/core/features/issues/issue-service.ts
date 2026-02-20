import {Injectable} from '@angular/core';

export interface Issue {
  id: number,
  name: string,
  link: string,
  fileName: string,
  downloadUrl: string,
  description: string
}

@Injectable({
  providedIn: 'root',
})
export class IssueService {

  filePath = `covers/`;
  fileEnding = `.webp`;

  issueList: Issue[] = [
    {
      id: 16,
      link: `https://www.ulisses-ebooks.de/de/product/550074/derenzeit-ausgabe-016-1048-bf`,
      name: `Ausgabe 16`,
      fileName: this.filePath + 'DZ_16' + this.fileEnding,
      downloadUrl: `downloads/DZ_16.pdf`,
      description: "Placeholder description for Ausgabe 16. Content will be added later."
    },
    {
      id: 15,
      link: `https://www.ulisses-ebooks.de/en/product/538755/derenzeit-ausgabe-015-1047-bf`,
      name: `Ausgabe 15`,
      fileName: this.filePath + 'DZ_15' + this.fileEnding,
      downloadUrl: `downloads/DZ_15.pdf`,
      description: "Placeholder description for Ausgabe 15. Content will be added later."
    },
    {
      id: 14,
      link: `https://www.ulisses-ebooks.de/product/529327/DERENZEIT--Ausgabe-014--1046-BF`,
      name: `Ausgabe 14`,
      fileName: this.filePath + 'DZ_14' + this.fileEnding,
      downloadUrl: `downloads/DZ_14.pdf`,
      description: "Placeholder description for Ausgabe 14. Content will be added later."
    },
    {
      id: 13,
      link: `https://www.ulisses-ebooks.de/product/517126/DERENZEIT--Ausgabe-013--1046-BF`,
      name: `Ausgabe 13`,
      fileName: this.filePath + 'DZ_13' + this.fileEnding,
      downloadUrl: `downloads/DZ_13.pdf`,
      description: "Placeholder description for Ausgabe 13. Content will be added later."
    },
    {
      id: 12,
      link: `https://www.ulisses-ebooks.de/product/506353/DERENZEIT--Ausgabe-012`,
      fileName: this.filePath + 'DZ_12' + this.fileEnding,
      name: `Ausgabe 12`,
      downloadUrl: `downloads/DZ_12.pdf`,
      description: "Placeholder description for Ausgabe 12. Content will be added later."
    },
    {
      id: 11,
      link: `https://www.ulisses-ebooks.de/product/487456/DERENZEIT--Ausgabe-011--1008-BF`,
      fileName: this.filePath + 'DZ_11' + this.fileEnding,
      name: `Ausgabe 11`,
      downloadUrl: `downloads/DZ_11.pdf`,
      description: "Placeholder description for Ausgabe 11. Content will be added later."
    },
    {
      id: 10,
      link: `https://www.ulisses-ebooks.de/product/476054/DERENZEIT--Ausgabe-010--1038-BF`,
      fileName: this.filePath + 'DZ_10' + this.fileEnding,
      name: `Ausgabe 10`,
      downloadUrl: `downloads/DZ_10.pdf`,
      description: "Placeholder description for Ausgabe 10. Content will be added later."
    },
    {
      id: 9,
      link: `https://www.ulisses-ebooks.de/product/464627/DERENZEIT--Ausgabe-009--1044-BF`,
      fileName: this.filePath + 'DZ_09' + this.fileEnding,
      name: `Ausgabe 9`,
      downloadUrl: `downloads/DZ_09.pdf`,
      description: "Placeholder description for Ausgabe 9. Content will be added later."
    },
    {
      id: 8,
      link: `https://www.ulisses-ebooks.de/product/455708/DERENZEIT--Ausgabe-008--1044-BF`,
      fileName: this.filePath + 'DZ_08' + this.fileEnding,
      name: `Ausgabe 8`,
      downloadUrl: `downloads/DZ_08.pdf`,
      description: "Placeholder description for Ausgabe 8. Content will be added later."
    },
    {
      id: 7,
      link: `https://www.ulisses-ebooks.de/product/443699/DERENZEIT--Ausgabe-007--1039-BF`,
      fileName: this.filePath + 'DZ_07' + this.fileEnding,
      name: `Ausgabe 7`,
      downloadUrl: `downloads/DZ_07.pdf`,
      description: "Placeholder description for Ausgabe 7. Content will be added later."
    },
    {
      id: 6.5,
      link: `https://www.ulisses-ebooks.de/product/432389/DERENZEIT--Ausgabe-0065--Travia-1041-BF`,
      fileName: this.filePath + 'DZ_April_1041' + this.fileEnding,
      name: `Aprilausgabe 2023`,
      downloadUrl: `downloads/DZ_April_1041.pdf`,
      description: "Placeholder description for Aprilausgabe 2023. Content will be added later."
    },
    {
      id: 6,
      link: `https://www.ulisses-ebooks.de/product/429354/DERENZEIT--Ausgabe-006--1044-BF`,
      fileName: this.filePath + 'DZ_06' + this.fileEnding,
      name: `Ausgabe 6`,
      downloadUrl: `downloads/DZ_06.pdf`,
      description: "Placeholder description for Ausgabe 6. Content will be added later."
    },
    {
      id: 5,
      link: `https://www.ulisses-ebooks.de/product/420954/DERENZEIT--Ausgabe-005--1044-BF`,
      fileName: this.filePath + 'DZ_05' + this.fileEnding,
      name: `Ausgabe 5`,
      downloadUrl: `downloads/DZ_05.pdf`,
      description: "Placeholder description for Ausgabe 5. Content will be added later."
    },
    {
      id: 4,
      link: `https://www.ulisses-ebooks.de/product/414522/DERENZEIT--Ausgabe-004--1045-BF`,
      fileName: this.filePath + 'DZ_04' + this.fileEnding,
      name: `Ausgabe 4`,
      downloadUrl: `downloads/DZ_04.pdf`,
      description: "Placeholder description for Ausgabe 4. Content will be added later."
    },
    {
      id: 3,
      link: `https://www.ulisses-ebooks.de/product/401305/DERENZEIT--Ausgabe-003--1044-BF`,
      fileName: this.filePath + 'DZ_03' + this.fileEnding,
      name: `Ausgabe 3`,
      downloadUrl: `downloads/DZ_03.pdf`,
      description: "Placeholder description for Ausgabe 3. Content will be added later."
    },
    {
      id: 2,
      link: `https://www.ulisses-ebooks.de/product/392010/DERENZEIT--Ausgabe-002--1043-BF`,
      fileName: this.filePath + 'DZ_02' + this.fileEnding,
      name: `Ausgabe 2`,
      downloadUrl: `downloads/DZ_02.pdf`,
      description: "Placeholder description for Ausgabe 2. Content will be added later."
    },
    {
      id: 1,
      link: `https://www.ulisses-ebooks.de/product/381263/DERENZEIT--Ausgabe-001--1042-BF`,
      fileName: this.filePath + 'DZ_01' + this.fileEnding,
      name: `Ausgabe 1`,
      downloadUrl: `downloads/DZ_01.pdf`,
      description: "Placeholder description for Ausgabe 1. Content will be added later."
    },
  ];

  getIssues(): Issue[] {
    return this.issueList;
  }

}