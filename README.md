# Interplanetary Age Calculator

## Authored by: 
Quin Asselin, 2022

***

## Table of Contents
1. [Repository Description](#description)
2. [Github Pages Information](#pages)
3. [Technologies Used](#tech)
4. [Setup Instructions](#setup)
5. [Tests](#tests)
6. [Known Bugs](#bugs)
7. [License Information](#license)

*** 

### Repository Description: {#description}
This project asks the user to input their birthday and life expectancy. Then, it calculates and displays to the user how long the user has lived in years relative to the year length on each of the planets. Additionally, the user will also receive an assessment of their age relative to their life expectancy and not how far the user is from the date of their life expectancy's end.

This project was hand-built in tandem with a programming class taught by Epicodus. It contains use of JavaScript, HTML, and formatting from both custom CSS and Bootstrap CSS. This project uses Jest for all business logic testing. Additional technologies that were used in this project are listed below.

***

### Technologies Used: {#tech}
- Javascript
- HTML5
- CSS3
- Markdown Text
- Bootstrap 4.6.2
- Git
- Github
- ES Lint
- Babel Core 7.18.6
- Webpack 4.46
- Webpack CLI 3.3.12
- HTML Webpack Plugin 4.5.2
- Clean Webpack Plugin 3.0.0
- Webpack Dev Server 3.11.3
- CSS Loader 3.6
- Jest 24.9
- Style Loader 1.3
***

### Setup Instructions: {#setup}
This project can be opened via cloning/downloading repository:
1. Download this repository from its Github Repository located [here.](https://github.com/Quin-Riley-A/galactic-age-calc)
2. Locate the download destination folder on your local machine.
3. Unzip the downloaded folder if necessary.
4. Ensure all files are present from your download folder, namely:
  - \__tests__ folder:
    - utility folder:
      - ageAssign.tests.js
      - millToDays.tests.js
    - ages.tests.js
  - css folder:
    - bootstrap.css
    - styles.css
  - src folder:
    - classes folder:
      - ages.js
    - utility folder:
      -ageAssign.js
      - millToDays.js
    - index.html
    - index.js
    - scripts.js
  - .babelrc
  - .eslintrc
  - .gitignore
  - package-lock.json
  - package.json
  - LICENSE
  - README.md
  - webpack.config.js

5. Navigate to your decompressed download destination folder within the terminal and run the following command to install dependencies:
```bash
npm install
```

6. Following this, use the following command to generate a bundled package containing the working html file:
```bash
npm run build
```

7. Next, to set up a development server, within the same directory run the following command in your terminal:
```bash
npm run start
```

8. Alternatively to step 7: After step 6 is successfully completed, navigate to the dist folder within the root directory and open the index.html file in your preferred web browser.
  * Note that by opening the program directly from the dist/index.html no changes made to the code while the webpage is opened will be registered. To register the effects of changes on the browser steps 6 and 8 will need to be repeated.
***

### Tests: {#tests}
Tests for this project were constructed in Jest using the Red-Green-Refactor workflow. Tests have been designed for 100% line coverage for the project's business logic. Further information about the function and design of each test can be found [here](/__tests__/).
***

### Known Bugs: {#bugs}
In the event that an extremely large number is entered into the life-expectancy field, the text at the bottom of the results section will state "Invalid Date" rather than the expected outcome date.  If you experience this issue, please message the producer of your current repository and include any relevant form/page information. Thank you for your patience as I work on any issues!

The page may experience formatting issues when opened on mobile devices or tablets/laptops in smaller windows. Page should still be legible but general project layout will shift in potentially unforeseen manner. Thus, it is recommended to open the HTML index page in browser or file explorer in as full a screen as hardware allows.

Additionally, the current apearance of the sight is a work in progress, and will require reworking in the near future using relevant imagery, fonts, and colors.

***

### License Information {#license}
*Quin Asselin, 2022. Available for distribution, modification, inspection, and application under [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)*