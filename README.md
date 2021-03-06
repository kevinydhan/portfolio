# Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/80416ed4-79af-48df-b07c-51beeb7ac27d/deploy-status)](https://app.netlify.com/sites/gifted-brattain-70e79d/deploys)
[![CircleCI](https://circleci.com/gh/kevinydhan/portfolio.svg?style=shield)](https://circleci.com/gh/kevinydhan/portfolio)

## File Structure

Below is an explanation of the file structure:

```
src
  components   <- React components
  context      <- React context objects and providers
  fragments    <- GraphQL fragments
  pages        <- Website's pages, each file equates to a new route in the production website
  queries      <- GraphQL queries
  sections     <- React section components
  theme        <- Styled components-related objects
  typings      <- TypeScript definitions
```

Diving to more specific conventions, each React component should be structured as such:

```
src
  components
    Navigation                 <- Folder containing component-specific files
      Navigation.d.ts          <- Component-specific TypeScript definitions
      Navigation.query.ts      <- Component-specific GraphQL query
      Navigation.styles.ts     <- Component-specific styles
      Navigation.tsx           <- React component
```
