# Welcome to TeevroFlix - a Full stack movie-explorer App

This React application allows users to search for movies using the OMDb API. The application will allow users to search for movies by title or genre, display relevant information and navigate the application seamlessly.


## Live Demo

The App has been deployed on "Render" (a free web-hosting platform) : https://movie-explorer-z2xf.onrender.com/

## Overview

The TeevroFlix app uses the OMDb API to fetch and display information about movies. Users can enter search queries to find movies, and the app provides a list of results. Individual movie details, such as the poster, title, and release year, are displayed for users to explore.

## Features

- **Search Functionality:** Users can search for movies by title or genre.
- **Movie Details:** When a user searches for a movie, the application should display
basic information like title, year, synopsis, and poster image.
- **API Integration:** The application utilizes an external movie database API (OMDb API) to retrieve movie information.
- **Data Manipulation:** It extracts relevant movie data from the API response and format it to display in the user interface.

## React Components

- **App.js:** Main React component managing the app's routes.
- **Home.js:** React component rendering the movie search form and list of movies.
- **Movie.js:** React component displaying details for a single movie.
- **NotFound.js:** React component rendered when a route is not found.
- **SearchForm.js:** React component providing the movie search form.

## Context

- **context.js:** Context provider managing the app's state, including movie data, loading status, and search queries.
- **Movies.js:** React component displaying a list of movies fetched from the OMDb API.
- **SearchForm.js:** React component providing the movie search form.


  
