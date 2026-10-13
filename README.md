# GitHub User Finder

A responsive web application for searching GitHub users, exploring developer profiles, and managing favorite users.


**Live Demo:** [View Project](https://mrm-jamali.github.io/github-user-finder/)

## Overview

Built with React, TypeScript, and TanStack Query, this project integrates the GitHub REST API to explore developers, discover popular users, and practice efficient server-state management.


## Screenshots

### Home Page
![Home Page](./screenshots/Home.png)

### Favorite Page
![Favorite Page](./screenshots/Favorite.png)

### About Page
![About Page](./screenshots/About.png)


## Features

- **User Search:** Search for GitHub users by entering a query and clicking the Search button.
- **Infinite Scrolling / Load More:** Fetch paginated search results using `useInfiniteQuery`.
- **Popular Users:** Discover developers ranked by follower count.
- **User Details:** View profile information, including followers, following, and public repositories.
- **Favorites:** Add and remove favorite users using React Context.
- **Persistent Search:** Preserve the search input and cached results when navigating between pages.
- **Loading & Error States:** Handle API loading and error scenarios.
- **Responsive UI:** Support different screen sizes.
- **Routing:** Navigate between Home, Favorites, and About pages.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- React Router
- React Context API
- React Icons
- GitHub REST API

## Key Technical Highlights

- Used `useInfiniteQuery` for paginated data fetching and caching.
- Managed query execution with separate input and submitted search states.
- Used query keys to manage cached results for different searches.
- Integrated GitHub APIs through reusable Axios functions.
- Shared application state using React Context.

## Getting Started

```bash
git clone https://github.com/mrm-jamali/github-user-finder.git
cd github-user-finder
npm install
npm run dev
```

Open the local URL provided by Vite.

## API

- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [User Search API](https://api.github.com/search/users?q=react)

Unauthenticated requests are subject to GitHub API rate limits.

## What I Learned

- Implementing infinite queries with TanStack Query.
- Managing API caching and pagination.
- Separating input state from submitted search state.
- Sharing state with React Context.
- Building responsive, reusable React components.

## Author

**Maryam Jamali** — [GitHub](https://github.com/mrm-jamali)
