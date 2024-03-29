# Chefconnect

## Description
A full-stack web application for food enthusiasts who want to review and communicate with chefs. 

## Inspiration
I've always wanted to make opportunities for talented chefs out there that can work without working for a restaurant. I got the inspiration from Yelp, but for Chefs! I wanted to make an app where users can not only communicate freely with chefs, but also, easily look up information about chefs, rate, and comment about them. In the near future, I plan on implementing a feature where users can book private chefs to come cook for users at the comfort of their own home. 

## Live Demo
https://chef-connect-1.herokuapp.com/

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- React
- PostgreSQL
- Bootstrap 5
- Webpack
- Heroku
- AWS S3
- Socket.io

## Features
- User can create an account.
- User can log in to their account.
- User can log out of their account.
- User can search chefs by cuisine type.
- User can see detailed information about a chef.
- User can add comments to chefs profile.
- User can see other user's comments.
- User can add chefs to their watchlist.
- User can remove chefs from their watchlist. 
- User can see a list of their own comments. 
- User can add a photo to their profile page.
- User can create a chef profile.
- User can see a list of active live message rooms.
- User can live message chefs. 

## Preview
![Kapture 2022-05-25 at 01 18 35](https://user-images.githubusercontent.com/68756038/170216677-7f291be5-658f-4596-975e-389a52795e99.gif)

![Kapture 2022-01-26 at 16 11 24](https://user-images.githubusercontent.com/68756038/151448049-831ce9f5-6c3e-4ccc-9a44-01319b463f55.gif)


## Stretch Features
- User will get a notification when receiving live message.
- User can schedule a chef using appointment calendar.

## System Requirements
- Node.js 14 or higher
- NPM 6 or higher

## Instructions
1. Clone repository
```
git clone git@github.com:DevJosephLee/chefconnect.git
cd chefconnect
```
2. Install all dependecies with NPM
```
npm install
```
3. Create copy of `.env.example`
```
cp .env.example
```
4. Start postgreSQL
```
sudo service postgresql start
```
5. Start project
```
npm run dev
```
