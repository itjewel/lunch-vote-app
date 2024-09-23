# lunch-vote-app

Create a full-stack app with a Next.js frontend, Nest.js backend, and PostgreSQL database (using Prisma ORM). Containerize everything using Docker and Docker Compose.

#Product Structure: <br>
App Name `Lunch-vote-app` then enter inside after that you see `lunch-vote-backend` and `lunch-vote-frontend`

**_ Backend NestJS Install _**

1. Go into the folder `lunch-vote-backend` then open terminal & run command `npm install`

2) After install then run `npm run start:dev`
3) Then you will get url for backend: `http://localhost:3000/`

**_ Front-end NextJS Install _**

1. Go into the folder `lunch-vote-frontend` then open terminal & run command `npm install`

2) After install then run `npm run dev`
3) Then you will get url for backend: `http://localhost:3001/`

**_ DB postgresql & prisma ORM run _**

1. Go into the folder `lunch-vote-app` then open terminal & run command `npx prisma migrate dev`

**_ By Docker Installation _**

1. Go `Lunch-vote-app` into the root folder then run `docker-compose up --build`
2. After starting your containers with docker-compose up, run the migration manually
   `docker-compose exec backend npx prisma migrate dev --name init`

# Api Configuration & Testing 

**_ Restaurant _**

1. Get data: http://localhost:3000/restaurants
2. Post Data: http://localhost:3000/restaurants
   post exp: { "name": "Rabbani Restaurant" }

**_ Food Pack _**

1. Get data: http://localhost:3000/food-packs/restaurant/1
2. Post Data: http://localhost:3000/food-packs
   post exp: {
   "name": "Drink Delight",
   "restaurantId": 3
   }

**_ Votes _**

1. Get data: http://localhost:3000/votes
2. Post Data: http://localhost:3000/votes
   post exp: {
   "restaurantId": 2,
   "foodPackId": 2
   }

**_ Winner Restaurant _**

3. Get data: http://localhost:3000/votes/winner


## After Install you will get Frontend & Backend  
Frontend Link: http://localhost:3001/ <br> 
Backend Link: http://localhost:3000/


## Preview of Home Page Feature

Here is a preview of the Home Page feature:

![Home Pack Feature](https://github.com/itjewel/lunch-vote-app/blob/main/screenshort/homePage.png)



## Preview of Restaurant Api

Here is a preview of the Restaurant Post:

![Post Restaurant Api](https://github.com/itjewel/lunch-vote-app/blob/main/screenshort/post_restaurant.png)


## Preview of Food Pack Api

Here is a preview of the Food Pack Api:

![Food Pack Api](https://github.com/itjewel/lunch-vote-app/blob/main/screenshort/foodPack.png)


## Preview of Winninn Api

Here is a preview of the Winner API Api:

![Winner Api](https://github.com/itjewel/lunch-vote-app/blob/main/screenshort/winner.png)
