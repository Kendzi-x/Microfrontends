# Microfrontends
Test project for testing microfrontends and module federation

## Important Files

Have a particular look at the following files:

- ``readme.md``: Shows how to install dependencies and how to start the example
- ``remote\webpack.config.js``: Microfrontend config
- ``shell\webpack.config.js``: Shell config
- ``shell\src\app\app.routes.ts``: Lazy route for microfrontend
- ``web-ang\src\app\app.module.ts``: Angular Web Component

## Installation and Usage

- Install packages: ``npm i`` in every subfolder
- Start Micro Frontend (/remote): ``ng serve``
- Start Angilar Web Component (/web-ang): ``ng serve``
- Start React app (/pgd): ``npm run start``
- Start Shell (shell): ``ng serve``
- Make sure ``remote``, ``web-ang`` and ``pgd`` are started before ``shell`` is loaded into the browser
- Use the shell app at ``4200`` port and check hyperlinks in the header

## Useful Links

- https://www.youtube.com/watch?v=EGdbmj-kj88 - [English] 
- https://www.youtube.com/watch?v=TNmc8sOldVU - [Russian]
- https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/ - whole series (10 parts)
