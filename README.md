# Dictionary Web App

A web application that allows users to search for word definitions using the Free Dictionary API.

## Features

- Search for word definitions
- View word phonetics, meanings, examples, synonyms, and antonyms
- Play pronunciation audio when available
- Toggle between light and dark themes
- Switch between serif, sans-serif, and monospace fonts
- View search history with timestamps
- Responsive design for optimal viewing on different devices

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/dictionary-web-app.git
   cd dictionary-web-app
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Running Tests

```
npm test
# or
yarn test
```

## API Information

This project uses the Free Dictionary API:
- [https://dictionaryapi.dev](https://dictionaryapi.dev)

## Deployment

The project can be built for production using:

```
npm run build
# or
yarn build
```

## Additional Notes

- The app automatically detects user color scheme preferences.
- Search history is stored in Redux and persists during the session.