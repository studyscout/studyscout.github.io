# GitHub Pages

- Free
- Easy to set up
- Automatic CI/CD
- **_Only static websites_**
  - We don't need to be married to this. If something we need requires a server, we'll need to pivot, but it'll be easier without needing to set all that up.
  - Reminder this also means we'll have to set up special methods if we want access to anything in node_modules outside of development
    - Something to do with Jekyll although honestly this may be handled by the Svelte compiler and we don't have to worry about this

# Svelte

- Simple syntax and compiles directly to html, css, and js
  - Anything that works in html is fair game here
- [Static site generation](https://kit.svelte.dev/docs/adapter-static)
  - They literally have a [GitHub pages section](https://kit.svelte.dev/docs/adapter-static#github-pages)
  - **_Don't use Slugs_**, use param queries instead to transfer data

# Firebase

- Authentication
- FireStore

# Google Maps API

- Maps JavaScript API
  - [overview](https://developers.google.com/maps/documentation/datasets/overview)
  - [js tutorial](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)
  - [typescript](https://developers.google.com/maps/documentation/javascript/using-typescript)
  - [embedded maps](https://developers.google.com/maps/documentation/embed/get-started) (idk if we'll need this but its apparently free?)
