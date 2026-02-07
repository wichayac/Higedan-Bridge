# Higedan Bridge
> A J-Pop lyrics web application designed to help Japanese learners bridge the gap between music and meaning.

## Project Overview
Higedan Bridge started as a personal project during my JLPT N5 studies, combining my interest in Japanese language with my passion for the band **Official Hige Dandism**.  

I am currently refactoring the project from a static multi-page site into a dynamic, data-driven web application to improve scalability, user experience, and my front-end engineering skills as a Computer Engineering student (currently JLPT N3).

## Key Technical Improvements
### 1. Single Page Lyrics System (Refactored)
**Improvement:**
Previously, the project used separate files such as lyrics-en.html and lyrics-jp.html. After refactoring, I consolidated them into a single lyrics.html page and used JavaScript to switch between languages instantly.

**What I Learned:**
- DOM manipulation using Vanilla JavaScript
- How to update content dynamically without reloading the page

### 2. Data-Driven Song List (Refactored)
**Improvement:**
Song information is now stored in a separate JavaScript file (songs.js). The home page dynamically generates song links based on this data instead of manually writing HTML for each song.

**What I Learned:**
- Using arrays and forEach() loops to generate HTML elements
- Reducing repetitive code (no more copy-pasting <a> tags)
- How data separation makes the project easier to scale

### 3. Integrated Media & Learning Tools (Refactored)
Spotify Embed:
Embedded Spotify player widgets so users can listen to the song while reading the lyrics.

Furigana Toggle:
Implemented a button to show or hide furigana using the <ruby> HTML tag and JavaScript-based toggling.

**What I Learned:**
- How to embed external media into a web page
- Using CSS classes and JavaScript to toggle visibility

### 4. UI/UX & CSS Improvements (Refactored)
Hero Section:
Added a hero image with improved typography to give the project a more modern and polished look.

**What I Learned:**
- CSS Flexbox for layout control
- Proper use of box-sizing to prevent layout issues

## Upcoming Features
[ ] JSON & Fetch API: Move song data to a .json file and use fetch() to load it (Preparing for Backend).

[ ] Search Bar: Create a filter system to find songs by title instantly.

[ ] Flashcards: Add a JLPT vocabulary practice mode based on the lyrics.