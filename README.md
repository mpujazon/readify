# Readify - Digital Library

Book management application developed with Angular that implements basic routing configuration and static routes.

## 📚 Project Description

Readify is a book management web application built with Angular that includes the following features:

- **Home Page**: Welcome page to the digital library
- **Book List**: View displaying the catalog of available books
- **Book Details**: Page with detailed information for each book
- **404 Error Handling**: Page for routes not found

## 🎯 Learning Objectives

This project is designed to learn and practice:

- Angular Router configuration
- Creating and associating components to routes
- Implementing basic navigation with `routerLink`
- Configuring static and dynamic routes
- Managing wildcard routes for 404 errors
- Styling with Tailwind CSS

## 🏗️ Route Structure

The application implements the following route configuration:

| Route | Component | Description |
|------|-----------|------------|
| `/` | Home | Home page |
| `/books` | BookList | List of books |
| `/books/:bookId` | BookDetails | Details of a specific book (dynamic route) |
| `**` | NotFound | 404 error page |

## 🚀 Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (package manager)
- Angular CLI

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd readify
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser at `http://localhost:4200/`

## 💻 Development

### Development Server

To start the local development server:

```bash
ng serve
```

The application will automatically reload when source files are modified.

### Generate New Components

To generate a new component:

```bash
ng generate component component-name
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling. The configuration includes:

- Responsive navigation bar
- Styles for active routes (bold/underline)
- Consistent design system

## 📁 Project Structure

```
src/
├── app/
│   ├── app.config.ts          # Application configuration
│   ├── app.routes.ts          # Route definitions
│   ├── app.html               # Main template with navigation
│   ├── app.ts                 # Main component
│   └── components/
│       ├── home/              # Home page component
│       ├── book-list/         # Book list component
│       ├── book-details/      # Book details component
│       └── not-found/         # 404 error component
├── index.html
├── main.ts
└── styles.css
```

## 🔧 Technical Features

- **Angular Standalone Components**: Standalone components without the need for NgModules
- **Router**: Route configuration with `provideRouter`
- **RouterLink**: Declarative navigation in templates
- **RouterLinkActive**: Style management for active routes
- **Dynamic Routes**: Route parameters with `:bookId`
- **Tailwind CSS**: CSS utility framework

## 🧪 Testing

To run unit tests:

```bash
ng test
```

## 🏗️ Build

To build the project for production:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## 📝 Development Notes

### RouterLink and RouterLinkActive

The application uses:
- `routerLink`: To define navigation links
- `routerLinkActive`: To apply CSS classes to active routes
- `routerLinkActiveOptions`: To configure matching behavior (exact match)

### PathMatch

The route configuration uses `pathMatch: 'full'` for root route redirection, ensuring it only matches the exact URL.

## 📚 Resources

- [Official Angular Documentation](https://angular.io/)
- [Angular Router](https://angular.io/guide/router)
- [Tailwind CSS](https://tailwindcss.com/)

## 👨‍💻 Author

Project developed by Miguel Pujazón Cárdenas for IT Academy - Sprint 5

## 📄 License

This project is open source and available under the MIT License
