import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource';
import { AuthService } from '../../services/auth';
import { Resource } from '../../models/resource.model';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class ResourcesComponent implements OnInit {
  resources$!: Observable<Resource[]>;
  hasError = false;

  constructor(
    private resourceService: ResourceService,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    this.hasError = false;
    this.resources$ = this.resourceService.getAll().pipe(
      catchError(error => {
        console.error('Error loading resources:', error);
        this.hasError = true;
        return of([]); // Return empty array on error
      })
    );
  }

  delete(id: number) {
    if (!confirm('Delete this resource?')) return;

    this.resourceService.delete(id).subscribe(() => {
      this.loadResources();
    });
  }

  approve(id: number) {
    this.resourceService.approve(id).subscribe(() => {
      this.loadResources();
    });
  }
}