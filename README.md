# Welcome to Eugene calories app!

It is my version of the most popular front-end interview question - make **a Counter app using React**. I continuously face this task during interviews, so creating a demo application for these cases might be a good idea!

**A Netlify deployed version**: https://eugene-nazarov-calories-app.netlify.app/

**Stack** :

- JavaScript ES6
- React
- HTML5
- Node.JS
- Bootstrap

## Features

The main idea of this application is **to help control nutrition**. Add food, track calories, and compare with your norm! In this version, daily norm set for 3000 calories.

### Basic functionality

1. A customer can **add any product** to a list with the use of a custom form.
2. Use arrows or input field to **change the product quantity**.
3. Press icon with × to **delete the product**.
4. The total amount of calories recounts automatically after any changes.
5. There are tree calories' levels depends on which color of Total calories changes:
   - Less than 51% - Green
   - From 51% to 100% - Orange
   - More than 101% - Red

### Third-party API

I decided to add some real-life data, so the application fetches food nutrition data from a third-party API service **Nutritionix**. They provide complete great quality information about any food: brand name, photo, weight, more than 20 titles of energy values, serving size, and so on. A link to full documentation: https://developer.nutritionix.com/docs/v2

### Storage

List of a customer products is stored in Browser Local Storage.
