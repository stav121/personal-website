import {Component, Input, OnInit} from '@angular/core';
import {ProjectTemplate} from '../projects.component';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  /**
   * Is the info still loading.
   */
  @Input() isLoading: boolean;

  /**
   * A project to display.
   */
  @Input() project: ProjectTemplate;

  /**
   * The initial project's name.
   */
  @Input() projectName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
