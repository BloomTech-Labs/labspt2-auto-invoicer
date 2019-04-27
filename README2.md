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
- MongoDB/Mongoose
- Node & Express

Deployed [here](https://www.myautoinvoicer.com)

### Reasoning:

- React.js / Context

  - We selected React as our frontend framework because we wanted a fast and efficient framework to help us manage many reusable components interacting with each other. We are using Context to allow us to manage state, without the setup required in Redux.

* Material UI

  - Our application targets small businesses so we wanted a styling framework that would be straight-forward, clean and minimal. Material UI allows us to style our application to give our users a professional experience.

- GraphQL

  - Our team has been excited to make this application with GraphQL from the start. We wanted to provide our users with a wealth of information regarding their invoices so we knew they would need to make multiple requests to the server. GraphQL allows us to query the data more efficiently. Moreover, data would change over time and editing queries and mutations in GraphQL is much simpler than rewriting REST endpoints.

* Netlify

  - Given that we were already experimenting with newer technologies on the backend (GraphQL, Mongoose), we wanted to deploy using a platform we were familiar with.

- GraphQL

  - We knew we wanted to provider users, busy business owners, with a seamless experience by making it easy for them to save and query customer and company data. Using GraphQL in lieu of REST has made the communication between client and server more efficient.

* MongoDB/Mongoose

  - We wanted a database that would allow us to store information as JSON objects for efficient querying. MongoDB allow our application to scale, if that is necessary in the future.

* Node & Express

  - We are with Node and Express and it works well with GraphQL.

---

# Security

### Authentication:

Our application has users authenticate with Google and Facebook Login. These are secure authentication systems that enabled our users, small business owners to sign in with their Google or Facebook account. As an added bonus, premium users will also to send information from the application to their Google accounts.

### Authorization:

Authorization is handled on the model level, with each model query checking to see if the requesting party is a free or premium user, restricting access certain privileges, and filtering responses to limit access to only those items the particular requesting party has created.

### Form Validation

Form validation is handled at the component level with Material-UI.

## Testing

TBD

## Improving Performance

TBD

# Installation Instructions

### Environment Variables

The `SECRET_KEY` needed include:

- `SESSION_SECRET`
- `COOKIE_SECRET`
- `GOOGLE_CLIENT_SECRET`
- `FACEBOOK_APP_SECRET_KEY`
- `STRIPE_SECRET`
- `STRIPE_CHECKOUT_SECRET_KEY`

### Using the application

The following APIs are needed:

- Postmark: `POSTMARK_API`
- TaxJar: `TAX_API`
- ZipCode: `ZIPCODE_API`, `CLIENT_KEY`
- Google Calendar: `CLIENT_ID`, `DISCOVERY_DOCS`, `SCOPES`

MongoDB Atlas

- `DB_NAME`, `DB_USER`, `DB_PASSWORD`

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
