<h1 align="center">WEBPT2 AutoInvoicer App</h1>

<div align="center"><h2>Brought to you by:</h2>

<a href="#">Abdiel Fernandez</a>

<a href="#">Andrés Rivera Toro</a>

<a href="#">Dewayne Lindsay</a>

<a href="#">Jorge Osto</a>

<a href="#">Paul Apivat Hanvongse</a>

</div>

# MyAutoInvoicer

# Description

MyAutoInvoicer allows users to easily generate, track, analyze, save and send invoices to their customers. With our App, users can easily keep track of all invoices to understand all of their customers. MyAutoInvoicer helps small businesses ensure that sales turns into cashflow.

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
  - [Frontend Built Using](#frontend-built-using)
  - [Backend Built Using](#backend-built-using)
  - [Reasoning](#reasoning)
- [Security](#security)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Form Validation](#form-validation)
- [Testing](#testing)
- [Improving Performance](#improving-performance)
- [Installation Instructions](#installation-instructions)
  - [Environment Variables](#environment-variables)
  - [Using the Application](#using-the-application)
- [Contributing](#contributing)
- [Documentation](#documentation)
  - [Database](#database)
    - [Models](#models)
      - [Company Model](#company-model)
      - [User Model](#user-model)
      - [Invoice Model](#invoice-model)
      - [Item Model](#item-model)
  - [GraphQL](#graphql)
    - [Queries](#queries)
      - [On Company Model](#on-company-model)
      - [On User Model](#on-user-model)
      - [On Invoice Model](#on-invoice-model)
      - [On Item Model](#on-item-model)
    - [Mutations](#mutations)
      - [Company Mutations](#company-mutations)
        - [Create Company](#create-company)
        - [Edit Company](#edit-company)
        - [Delete Company](#delete-company)
      - [User Mutations](#user-mutations)
        - [Create User](#create-user)
        - [Edit User](#edit-user)
        - [Delete User](#delete-user)
      - [Invoice Mutations](#invoice-mutations)
        - [Create Invoice](#create-invoice)
        - [Edit Invoice](#edit-invoice)
        - [Delete Invoice](#delete-invoice)
      - [Item Mutatons](#item-mutations)
        - [Create Item](#create-item)
        - [Edit Item](#edit-item)
        - [Delete Item](#delete-item)
  - [Stripe](#stripe)
  - [Free vs Premium](#free-vs-premium)
  - [Styles and Theming](#styles-and-theming)

## Tech Stack

### Frontend built using:

- React.js
- Material UI
- GraphQL
- Netlify

Deployed [here](https://www.myautoinvoicer.com)

### Backend built using:

- GraphQL
- bcrypt
- MongoDB
- Node & Express

Deployed [here](https://www.myautoinvoicer.com)

### Reasoning:

- React.js

  - We selected React as our frontend framework because we knew with the application we were planning on building, there were going to be a lot of reusable components all interacting with each other.

- Material UI

  - The styling of Material UI components has always appealed to our team, so we jump at any opportunity to integrate it into our varied projects. Our goal for this application was to be utilitarian without seeming as though we were making no effort on improving user experience, so Material UI just seemed like the good fit.

- GraphQL/Apollo Client

  - We made the decision early on to attempt to make this application with GraphQL instead of REST as none of the team had worked on a GraphQL project of this scale and we were all keen to learn what we could learn from being in the thick of it, as it were. We also realized that a lot of the data we would need from our server would be subject to change over time and that editing queries and mutations in GraphQL is a lot simpler than rewriting REST endpoints.

- Netlify

  - In a bid to reduce the number of independent variables at play in the application (as a lot of the decisions we made early on about tech stack choice were with the intent of learning a lot of new technology), we opted to deploy using a platform we had all independently been successful at deploying from at some point or another.

- PostgresQL

  - We chose a SQL database database because we felt that the necessary components of our application related to each other and would be best implemented in a relational database. We chose PostgresQL specifically because it was the backend support most recommended by Django, which we had already decided would be our backend framework, for its support of schemas.

- GraphQL

  - We knew that the models we were dealing with were very closely related to each other and that the way in which we wanted to display that data to users called for a lot of connected queries to the database. Using GraphQL in lieu of REST (while having an initial setup cost of having to make sense of the various documentation) has made a lot of the communication between client and server more efficient.

- Bcrypt

  - Django's default hashing algorithm is PBKDF2 but we were more familiar with bcrypt password hashing, having implemented it in every security-based project, so felt safer using it as our password hashing algorithm.

- Heroku
  - We chose Heroku for roughly the same reason we chose Netlify, with the addendum that we also wanted a deployment site that would interact well with a Postgres database.

---

# Security

### Authentication:

### Authorization:

### Form Validation

## Testing

## Improving Performance

# Installation Instructions

### Environment Variables

### Using the application

# Contributing

# Documentation

### Models

#### Company Model

#### User Model

#### Invoice Model

#### Item Model

## GraphQL

### Queries

#### On Company Model:

#### On User Model:

#### On Invoice Model:

#### On Item Model:

### Mutations:

#### Company Mutations:

##### Create Company

```
- Create company mutations
```

#### User Mutations:

#### Invoice Mutations:

##### Create Invoice

##### Edit Invoice

##### Delete Invoice

#### Item Mutations:

##### Create Item

##### Edit Item

##### Delete Item

## Stripe:

## Free vs Premium

## Styles and Theming
