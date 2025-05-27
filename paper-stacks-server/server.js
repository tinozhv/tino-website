//Import the express library
const express = require('express');

//Create an Express application
const app = express();

//Define the port the server will listen on (localhost:3000)
const port = process.env.PORT || 3000;

//Set up a simple in-memory stack (array) with placeholder image names
let fullStacks = {
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
        'https://tinoschincariol.com/paper-stacks/images/right/Affordable%20cinematographer%20for%20hire.png',
        'https://tinoschincariol.com/paper-stacks/images/right/All%20of%20This%20Self-Monitoring.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Create%20art%20text.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Driving%20around%20Montreal%20at%203-00%20am.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Egg%20tempera%20on%20untempered%20hardboard.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Eurasian%20curlew.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Floods%20snarl%20traffic%20in%20metropolitan%20area.png',
        'https://tinoschincariol.com/paper-stacks/images/right/It%20was%20all%20cut%20to%20ribbons.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Kino%20opened%20his%20hand%20and%20held%20it%20out.png',
        'https://tinoschincariol.com/paper-stacks/images/right/November%2023,%202024.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Packaging%20for%20glycerin%20soap.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Packaging%20for%20glycerin%20soap.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Pyramids%20should%20be%20stepped.png',
        'https://tinoschincariol.com/paper-stacks/images/right/The%20Biltmore%20hotel.png',
        'https://tinoschincariol.com/paper-stacks/images/right/The%20camera%20and%20the%20exhibition.png',
        'https://tinoschincariol.com/paper-stacks/images/right/The%20end%20is%20a%20bit%20disturbing.png',
        'https://tinoschincariol.com/paper-stacks/images/right/The%20four%20seas%20rise%20high.png',
        'https://tinoschincariol.com/paper-stacks/images/right/There%20were%20no%20real%20fruit%20sours.png',
        'https://tinoschincariol.com/paper-stacks/images/right/This%20passport%20is%20valid%20for%20all%20countries.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Up%20Colbourne%20Lodge%20Dr.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Vulcano-Porto.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Write%20it%20down%20and%20keep%20it%20safe.png',
        'https://tinoschincariol.com/paper-stacks/images/right/You%20just%20felt%20a%20bit%20ashamed.png',
        'https://tinoschincariol.com/paper-stacks/images/right/Your%20desires%20are%20not%20extravagant.png',
        'https://tinoschincariol.com/paper-stacks/images/right/ambient.png'
    ]
};

let stacks = {
    left: shuffleArray(fullStacks.left),
    right: shuffleArray(fullStacks.right)
};

function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
};

function scheduleDailyReset() {
    setInterval(() => {
        const now = new Date();
        if (now.getUTCHours() === 0 && now.getUTCMinutes() === 0) {
            stacks.left = shuffleArray(fullStacks.left);
            stacks.right = shuffleArray(fullStacks.right);
            console.log('Stacks reset at midnight UTC!');
        }
    }, 60 * 1000);  // check every 60 seconds
};

// Define a route: GET /stack/top
// This route responds with the top item of the stack (last item in the array)
app.get('/stack/:side/top', (req, res) => {
    const side = req.params.side;  // 'left' or 'right'
    const stack = stacks[side];
    
    if (!stack) {
        return res.send('Invalid stack side');
    }

    if (stack.length === 0) {
        // If the stack is empty, return a message
        return res.send('This stack is empty');
    }
    // Otherwise, return the top item
    res.json({ top: stack[stack.length - 1] });
});

//Start the Express server and listen for incoming requests on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

scheduleDailyReset();