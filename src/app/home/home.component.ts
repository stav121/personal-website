import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/**
 * Home component.
 *
 * @author Stavros Grigoriou (stav121@protonmail.com)
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Total stars loading indicator.
   */
  public isTotalStarsLoading = true;
  /**
   * Total stars.
   */
  public totalStars = 0;

  /**
   * Forks loading indicator.
   */
  public isForksLoading = true;

  /**
   * Total forks.
   */
  public totalForks = 0;

  /**
   * Total projects.
   */
  public isTotalProjectsLoading = true;

  /**
   * Total projects.
   */
  public totalProjects = 0;

  constructor(private readonly http: HttpClient) {
  }

  public ngOnInit(): void {
    this.loadGithubData();
  }

  /**
   * Git data loader.
   * @private
   */
  private loadGithubData(): void {
    this.http.get('https://api.github.com/users/stav121/repos')
      .subscribe((data: any) => {
        data.forEach((x) => {
          this.totalStars += x.stargazers_count;
        });
        this.isTotalStarsLoading = false;
        data.forEach((x) => {
          this.totalForks += x.forks;
        });
        this.isForksLoading = false;
        data.forEach((x) => {
          this.totalProjects += 1;
        });
        this.isTotalProjectsLoading = false;
      });
  }
}
