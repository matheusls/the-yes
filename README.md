# The Yes Assessment Script

This repository contains the script developed for The Yes assessment.


## How to execute

Simply copy and paste the script in the browser console and execute it. It should return a JSON string containing all required information about the product the pages refers to.

As the script makes use of some more recent features, such as `optional chaining`, make sure your browser is up to date.

## Technologies used

The script makes used of plain JavaScript only.

## What does the script do?

The script queries the webpage for specific information about the product. To do so, it uses selectors that are less likely to change in future builds and best describe the information that is being fetched.

Also, it wasn't done in the most optimal way because the website in question uses very generic markup, instead of semantic markup.
