import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/**
 * A Github project template.
 */
export class ProjectTemplate {
  name: string;
  description: string;
  stargazers_count: number;
  forks: number;
  html_url: string;
  license: { name: string };
  pushed_at: Date;
  open_issues: number;
}

/**
 * Projects component.
 *
 * @author Stavros Grigoriou <unix121@protonmail.com>
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  /* i3wm-themer project */
  public i3wmthemer: ProjectTemplate;
  public isi3wmthemerLoading = true;

  /* gmail-generator project */
  public gmailGenerator: ProjectTemplate;
  public isGmailGeneratorLoading = true;

  /* tasklet project */
  public tasklet: ProjectTemplate;
  public isTaskletLoading = true;

  /* warc-parser project */
  public warcParserLoading = true;
  public warcParser: ProjectTemplate;

  /* warc-se project */
  public warcSeLoading = true;
  public warcSe: ProjectTemplate;

  /* trip-a project */
  public tripaLoading = true;
  public tripa: ProjectTemplate;

  /**
   * Constructor.
   * @param http HttpClient module.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.getI3WmThemer();
    this.getTasklet();
    this.getGmmailGenerator();
    this.getAmIPawned();
    this.getWarcSE();
    this.getTripA();
  }

  private getI3WmThemer(): void {
    this.http.get('https://api.github.com/repos/stav121/i3wm-themer')
      .subscribe((data: ProjectTemplate) => {
        this.isi3wmthemerLoading = false;
        this.i3wmthemer = data;
      });
  }

  private getTasklet(): void {
    this.http.get('https://api.github.com/repos/stav121/tasklet')
      .subscribe((data: ProjectTemplate) => {
        this.isTaskletLoading = false;
        this.tasklet = data;
      });
  }

  private getGmmailGenerator(): void {
    this.http.get('https://api.github.com/repos/stav121/gmail-generator')
      .subscribe((data: ProjectTemplate) => {
        this.isGmailGeneratorLoading = false;
        this.gmailGenerator = data;
      });
  }

  private getAmIPawned(): void {
    this.http.get('https://api.github.com/repos/stav121/warc-parser')
      .subscribe((data: ProjectTemplate) => {
        this.warcParserLoading = false;
        this.warcParser = data;
      });
  }

  private getWarcSE(): void {
    this.http.get('https://api.github.com/repos/stav121/warc-se')
      .subscribe((data: ProjectTemplate) => {
        this.warcSeLoading = false;
        this.warcSe = data;
      });
  }

  private getTripA(): void {
    this.http.get('https://api.github.com/repos/stav121/trip-a')
      .subscribe((data: ProjectTemplate) => {
        this.tripaLoading = false;
        this.tripa = data;
      });
  }
}
