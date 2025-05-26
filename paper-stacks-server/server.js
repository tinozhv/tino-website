// 1️⃣ Import the express library
const express = require('express');

// 2️⃣ Create an Express application
const app = express();

// 3️⃣ Define the port the server will listen on (localhost:3000)
const port = 3000;

// 4️⃣ Set up a simple in-memory stack (array) with placeholder image names
let stacks = {
    left: [
        'https://tinoschincariol.com/paper-stacks/images/left/-%20[%20CA1078%20FLIGHT%20FROM%20JFK%20TO%20ANC.png',
        'https://tinoschincariol.com/paper-stacks/images/left/-%20[%20]%20First%20principle%20and%20the%20very%20first%20beginning.png',
        'https://tinoschincariol.com/paper-stacks/images/left/1-900-568-3636.png',
        'https://tinoschincariol.com/paper-stacks/images/left/9,907%20Photos,%20434%20Videos.png',
        'https://tinoschincariol.com/paper-stacks/images/left/A%20landscape%20somewhere.png',
        'https://tinoschincariol.com/paper-stacks/images/left/AUTHORIZATION-%20006309.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Analogous%20&%20Homologous%20Structures.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Aroma%20of%20the%20forest.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Berger,%20John.%20A%20Painter%20of%20Our%20Time..png',
        'https://tinoschincariol.com/paper-stacks/images/left/Decide%20to%20walk%20down%20east%20or%20west.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Following%20is%20your%20schedule%20by%20day.png',
        "https://tinoschincariol.com/paper-stacks/images/left/For%20convenience,%20let's%20call%20it%20'Becky'.png",
        'https://tinoschincariol.com/paper-stacks/images/left/Full%20fathom%20five%20thy%20father%20lies.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Full-time%20permanent%20Butcher.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Grass%20grows%20from%20the%20middle.png',
        "https://tinoschincariol.com/paper-stacks/images/left/imnotsure.png",
        'https://tinoschincariol.com/paper-stacks/images/left/My%20daughter%20plays%20on%20the%20floor.png',
        'https://tinoschincariol.com/paper-stacks/images/left/My%20favourite%20days%20in%20LA%20are%20nights.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Pay%20Parking%20Enforced.png',
        'https://tinoschincariol.com/paper-stacks/images/left/Replica%20of%20a%20chip.png',
        'https://tinoschincariol.com/paper-stacks/images/left/The%20contemporary%20is%20constituted%20by%20doubt.png',
        'https://tinoschincariol.com/paper-stacks/images/left/The%20heaven%20and%20earth%20are%20united%20in%20gold.png',
        'https://tinoschincariol.com/paper-stacks/images/left/The%20salt%20sea%20will%20unlock%20their%20silence.png',
        "https://tinoschincariol.com/paper-stacks/images/left/There's%20250$%20+%20TX%20admin%20fee.png",
        'https://tinoschincariol.com/paper-stacks/images/left/To%20Find%20The%20Color%20Of%20Summer.png'


    ],

    right: [
        //TODO: add right files
    ]
}

// 5️⃣ Define a route: GET /stack/top
// This route responds with the top item of the stack (last item in the array)
app.get('/stack/top', (req, res) => {
    if (stack.length === 0) {
        // If the stack is empty, return a 404 error with a message
        return res.send('This stack is empty');
    }
    // Otherwise, return the top item
    res.send(`Top of stack: ${stack[stack.length - 1]}`);
});

app.post()

// 6️⃣ Start the Express server and listen for incoming requests on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});