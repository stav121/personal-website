import {Component} from '@angular/core';

/**
 * Main component.
 *
 * @author Stavros Grigoriou <unix121@protonmail.com>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  /**
   * Currently visible component.
   */
  public visibleComponent = 'home';

  /**
   * Set the visible component.
   */
  public toggleVisibleComponent(component: string): void {
    this.visibleComponent = component;
  }
}
