import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Header component.
 *
 * @author Stavros Grigoriou <unix121@protonmail.com>
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  /**
   * Show/Hide contact event emitter.
   */
  @Output() toggleVisibleComponent = new EventEmitter<string>();

  constructor() {
  }

  /**
   * Toggle the show/hide home.
   */
  public toggleShowHome(): void {
    this.toggleVisibleComponent.emit('home');
  }

  /**
   * Toggle the show/hide projects.
   */
  public toggleShowProjects(): void {
    this.toggleVisibleComponent.emit('projects');
  }

  /**
   * Toggle the show/hide about.
   */
  public toggleShowContact(): void {
    this.toggleVisibleComponent.emit('contact');
  }

}
