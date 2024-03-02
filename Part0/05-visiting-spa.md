
sequenceDiagram
    participant browser
    participant server



    browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/spa
    <!-- HTML Code -->


    browser ->> server GET  https://studies.cs.helsinki.fi/exampleapp/main.css
       <!-- Stylesheet  -->

    browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/spa.js
       <!-- Javascript   -->

       <!-- JS code -->
       <!-- Inside event handler -->
   browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/data.json

   Event handler is executed and notes are rendered to the page
