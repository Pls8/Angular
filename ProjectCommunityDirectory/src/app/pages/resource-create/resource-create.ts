import { Component } from '@angular/core';
import { ResourceCreate } from '../../models/resource-create.model';
import { ResourceService } from '../../services/resource';
import { CategoryService } from '../../services/category';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resource-create',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './resource-create.html',
  styleUrl: './resource-create.css',
})
export class ResourceCreateComponent {
  categories: Category[] = [];

  model: ResourceCreate = {
    name: '',
    description: '',
    categoryId: 0,
    phone: '',
    contactEmail: '',
    contactInfo: '',
    city: '',
    address: '',
    website: ''
  };

  constructor(
    private resourceService: ResourceService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(res => this.categories = res);
  }

  submit() {
    this.resourceService.create(this.model).subscribe(() => {
      alert('Resource submitted for approval');
      this.router.navigateByUrl('/resources');
    });
  }
}
