
sequenceDiagram
    participant browser
    participant server


    browser ->> server GET  tohttps://fulstack-exampleapp.herokuapp.com/spa
    <!-- HTML Code -->


    browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/main.css
       <!-- Stylesheet  -->

    browser ->> server GET https://fulstack-exampleapp.herokuapp.commain.js
       <!-- Javascript   -->

       <!-- JS code -->
       <!-- Inside event handler -->
   browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/data.json

   Event handler is executed and notes are rendered to the page
   <!-- User submits form to add new node  -->
   browser ->> server POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa    -->>  This request is part of an onSubmit handler that creates a 'new_note' object and adds it to the json data


{
    "content": "new",
    "date": "2024-03-02T15:58:05.839Z"
}

Server ->> browser Sends back the array of objects for the browser to display
