// import express from "express";
// import { Profile } from "./profile.mjs";

let express = require("express");
let app = express();

app.listen(3000);

app.use(express.json());

app.get("/home", (req, res) => {
    res.sendFile("index.html", {root:__dirname})
})

/**
 * Will display profile data on the screen
 * Currently reachable by typing localhost:3000/profile directly into the url box
 */
app.get("/profile", (req, res) => {
    // Handle GET request for /profile
    res.send("This is the profile page");
});

/**
 * Creates a Profile object using request body data
 * Should print "Hi {inputted name}!" to the browser page localhost:3000/profile
 * Currently prints "Hi undefined!" to the browser
 * but "Hi {inputted name}!" to the console, so idk what's going on
 */
app.post("/profile", (req, res) => {
    import("./profile.mjs").then(({ Profile }) => {
        // console.log(req.body);
        let p = Profile.create(req.body);
            // if(!p) {
            //     res.status(400).send("Bad request");
            //     return;
            // }
            if(p){
                // res.status(201).json(p);
                res.send("Hi " + p.getName() + "!");
                console.log("Hi " + p.getName() + "!")
                // console.log(Profile.getProfiles());
            }    
        // try {
        //     const { Profile } = await import("./profile.mjs");
        //     const p = await Profile.create(req.body);
            
        //     if (p) {
        //         // res.status(201).json(p);
        //         res.send("Hi " + p.getName() + "!");
        //         console.log("Hi " + p.getName() + "!");
        //     } else {
        //         res.status(400).send("Bad request");
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        //     res.status(500).send("Internal server error");
        // }

         // handleProfileCreation(req, res);
    });
})


/** 
 * Tried to implement an async function to handle/wait for the Profile.create() function, which seems to be async
 */
    // async function handleProfileCreation(req, res) {
    //     try {
    //         const { Profile } = await import("./profile.mjs");
    //         const p = Profile.create(req.body);
            
    //         if (p) {
    //             // res.status(201).json(p);
    //             console.log("Type of p:", typeof p);
    //             console.log("p:", p);
    //             res.send("Hi " + p.getName() + "!");
    //             console.log("Hi " + p.getName() + "!");
    //         } else {
    //             res.status(400).send("Bad request");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         res.status(500).send("Internal server error");
    //     }
    // }
