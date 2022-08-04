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
- Start Micro Frontend (remote): ``ng serve``
- Start Angilar Web Component (web-ang): ``ng serve``
- Start Shell (shell): ``ng serve``
- Make sure ``remote`` and ``web-ang`` are started before ``shell`` is loaded into the browser
- Use the shell app at ``4200`` port and check hyperlink ``dms`` in the header to load `remote`
