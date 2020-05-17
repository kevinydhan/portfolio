## File Structure

Below is an explanation of the file structure

```
src
  components   <- React components
  config       <- Site configuration files
  data         <- JSON/YAML files containing data to be used by the website
  images       <- Images
  layouts      <-
  pages        <- Website's pages, each file equates to a new route in the production website
  theme        <- CSS/Sass-related files
  typings      <- TypeScript typing and declaration files
  utils        <- Utility functions used throughout the application
```

Diving to more specific conventions, each React component should be structured as such:

```
src
  components
    Navigation                 <- Folder containing component-specific files
      Navigation.tsx           <- React component
      Navigation.module.scss   <- Component-specific Sass module
```

