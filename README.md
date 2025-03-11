# Recipe Recommender App

## Description

The Recipe Recommender App is a personalized recipe recommendation application that suggests recipes based on user-defined dietary restrictions and available ingredients. The app integrates with the Spoontacular API to fetch recipe data and generate recommendations.

## Technologies Used

- **Front-End:**
  - HTML5
  - CSS
  - JavaScript

- **Back-End:**
  - Node.js
  - Express.js
  - Axios (for making HTTP requests)

- **APIs:**
  - [Spoontacular API](https://spoonacular.com/food-api) (for fetching recipe data)

## Features

- User-friendly interface for selecting dietary restrictions and entering available ingredients.
- Fetches and displays recipes based on user input.
- Responsive design for better user experience.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   cd server
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Issues and Limitations

- **CORS Issues:** Initially encountered CORS issues when making API requests from the front-end to the back-end. This was resolved by using the `cors` middleware in the Express.js server. But later I was able to make it work without using the `cors` middleware.
- **API Rate Limits:** The Spoontacular API has rate limits, which may restrict the number of requests that can be made in a given time period. This was managed by ensuring efficient use of API calls and handling errors gracefully.
- **Error Handling:** Implemented error handling to manage cases where the API request fails or returns no results.

## Future Improvements

- Add more dietary restriction options.
- Improve the UI/UX with additional styling and features.
- Implement user authentication to save and manage user preferences.

## Credits

- [Spoontacular API](https://spoonacular.com/food-api) for providing recipe data.
````