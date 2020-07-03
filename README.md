# WORKOUT TRACKER -- HOMEWORK 17

## Description  
A web application to help users keep track of their workouts. 

## Table of Contents

* [Technologies Used](#technologies-used)

* [How to Use](#how-to-use)

* [How I Made This](#how-i-made-this)

* [Deployed Application](#application-deployed-with-heroku)

* [GitHub Repo](#link-to-github-repo)

* [Future Development Ideas](#future-development-ideas)  

## Technologies Used  
Built in Visual Studio with          
HTML       
CSS      
Javascript        
Node.js   
Morgan   
Express   
MongoDB
Mongoose    

## How to Use  
Navigate to https://honest-goose-44150.herokuapp.com/. If you do not have any stored workouts, you will be given the option to make a new workout by clicking the "New Workout" button. If you have any stored workouts, you will see statistics from your most recent one (including the date of your workout, total workout duration, exercises performed, total distance covered, total weight lifted, total sets performed, and total reps performed). You will have the option to continue that workout (by clicking the "Continue" button) or make a new workout. If you click "Continue", you can add a new exercise to your current workout by following the prompts. When you are finished, you can either add another exercise to that workout, or click "Complete" to see your total stats again (which will now include information from the new exercise(s) you added). Back at the home screen, if you click "New Workout", you will first be prompted to select an exercise type (cardio or resistance), which will determine what form you will receive on the next screen. Once you have added all of your exercises, click "Complete" to see the stats from your new workout. Finally, click "Dashboard" in the NavBar in order to see a graphical display of your workout statistics over the past seven days.    

![image](https://media.giphy.com/media/QxT321J8Ql89KvJwLv/giphy.gif)  

## How I Made This    
I was given starter code for the front end and was instructed to create html routes, API routes, a server, and a Mongoose model for workouts. The server, model, and html routes were very intuitive and quick to make. The API routes were more difficult to figure out because I had to go look in the front end to see what was necessary. I created two get routes (one for the most recently added workout, one for the seven most recent workouts), one post route (for creating new workouts), and one put route (for updating existing workouts).    

## Application Deployed With Heroku:
https://honest-goose-44150.herokuapp.com/

## Link to GitHub Repo    
https://github.com/alyssahellrung/workoutTracker  

## Future Development Ideas
--More intuitive UI  
--A delete route for deleting exercises/workouts