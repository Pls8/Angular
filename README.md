![image alt](https://github.com/Pls8/Angular/blob/main/Comp%202_000000.jpg?raw=true)
# **Angular Framework Overview**

## **What is Angular?**
Angular is an open-source, front-end web application framework developed and maintained by Google. It is used to build single-page applications (SPAs) using TypeScript, a superset of JavaScript. Angular provides a structured way to build scalable, maintainable, and high-performance web applications.

## **Key Features of Angular**

### **1. TypeScript-Based**
Angular is built with TypeScript, which adds static typing, interfaces, and decorators. This helps catch errors early and improves code readability and maintainability.

### **2. Component-Based Architecture**
Angular applications are built using components. Each component controls a part of the UI and consists of:
- **HTML template** (view)
- **TypeScript class** (logic) 
- **CSS styles** (styling)

### **3. Two-Way Data Binding**
Angular supports two-way data binding, meaning changes in the UI automatically update the data model and vice versa. This simplifies synchronization between data and views.

### **4. Dependency Injection (DI)**
Angular has a powerful built-in dependency injection system that makes applications modular, testable, and loosely coupled.

### **5. Directives**
Directives extend HTML functionality. Examples include:
- **Structural directives** (`*ngIf`, `*ngFor`)
- **Attribute directives** (`ngClass`, `ngStyle`)

### **6. Services and RxJS**
Services are used to share data and logic across components. Angular uses RxJS for handling asynchronous operations such as HTTP requests and event streams.

## **Angular Architecture**

```
┌─────────────────────────────────────────┐
│                Modules                  │
│    Group related components & services  │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│              Components                 │
│          Control views (UI)             │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│              Templates                  │
│        HTML with Angular syntax         │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│               Services                  │
│      Business logic & data handling     │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│               Routing                   │
│      Navigation between views           │
└─────────────────────────────────────────┘
```

## **Getting Started**

### **Installation**
```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Create a new Angular project
ng new my-app

# Navigate to project directory
cd my-app

# Start development server
ng serve
```

### **Basic Angular Component Example**
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <input [(ngModel)]="name" placeholder="Enter your name">
    <p>Hello, {{ name }}!</p>
  `,
  styles: [`
    h1 { color: #369; font-family: Arial, Helvetica, sans-serif; }
  `]
})
export class AppComponent {
  title = 'Angular App';
  name = '';
}
```

## **Angular CLI Commands**

| Command | Description |
|---------|------------|
| `ng new [project-name]` | Create a new Angular project |
| `ng serve` | Start development server |
| `ng generate component [name]` | Generate a new component |
| `ng generate service [name]` | Generate a new service |
| `ng build` | Build the project for production |
| `ng test` | Run unit tests |
| `ng add [package]` | Add an external library |

## **Project Structure**
```
my-app/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   ├── services/       # Shared services
│   │   ├── models/         # TypeScript interfaces
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app.routing.ts
│   ├── assets/            # Static files
│   ├── environments/      # Environment configurations
│   ├── index.html
│   └── main.ts
├── angular.json          # Angular configuration
├── package.json          # Dependencies
└── tsconfig.json        # TypeScript configuration
```
