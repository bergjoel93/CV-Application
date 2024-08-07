## CV - Generator

This is my version of a CV-Generator! This web application allows users to create a customized resume.

## Features

- **Dynamic Form Handling:** Users can fill out personal information, education, and work experience.

## Purpose

The purpose of this project was to practice using React for the first time. This project mostly taught me how to practice using states and sharing state data across components. My technique for building this project was to start with the smaller individual components, manage their states if needed, and then lifting the states up to the App component so that data from the forms could be shared to the Preview component.

## Further work

I would like to further the work in this project by adding the following:

- Additional form cards like a "skills", "projects", "coursework", and "certifications" section.
- I would love to make the preview document more than one page (right now limited to 1).
- The ability to print the resume would be awesome!

# File Structure

Here's a brief overview of the project's file structure:

```plaintext



CV-Generator

├── README.md

├── index.html

├── package-lock.json

├── package.json

├── postcss.config.js

├── public

│ └── vite.svg

├── src
│ ├── components
│ │ ├── App.jsx
│ │ ├── form
│ │ │ ├── accordian.jsx
│ │ │ ├── accordianCard.jsx
│ │ │ ├── education
│ │ │ │ ├── addEducationForm.jsx
│ │ │ │ └── education.jsx
│ │ │ ├── experience
│ │ │ │ ├── addExperience.jsx
│ │ │ │ └── experience.jsx
│ │ │ └── mainInfo
│ │ │ └── mainInfoForm.jsx
│ │ ├── genericComponents
│ │ │ ├── checkbox.jsx
│ │ │ └── textInput.jsx
│ │ ├── header
│ │ │ └── header.jsx
│ │ ├── preview
│ │ │ └── preview.jsx
│ │ └── styles
│ │ └── App.css
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
└── vite.config.js

```

## Acknowledgments

- This project was made possible thanks to the amazing instructions from The Odin Project.
