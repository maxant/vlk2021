# VLK demo

## Development

    npm install nodemon -g

    # running with hot deploy
    nodemon server.js

    # debugging
    nodemon --inspect server.js

## Run

    npm start

or

    node server.js

## Azure

See https://docs.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux
That talks about default ports and commands.

See https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/tutorial-vscode-azure-cli-node/tutorial-vscode-azure-cli-node-03

    az login
    az account set --subscription <my sub>

    # get a list of valid locations
    az account list-locations | jq '.[].name' | grep euro

    # create a resource group
    az group create --name vlk-rg --location westeurope

    # set defaults
    az config set defaults.group=vlk-rg defaults.location=westeurope

    # create an app service plan
    az appservice plan create --name vlk-appserviceplan --is-linux --sku FREE

    # list runtimes:
    az webapp list-runtimes

    # now create the webapp - run this from this folder!
    # https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az_webapp_up
    az webapp up --launch-browser --logs --name maxant-vlk --os-type Linux --plan vlk-appserviceplan --runtime "node|12-lts" --sku FREE

    az webapp log tail --name maxant-vlk

In vscode open the azure extention and check out app service. right click maxant-vlk and choose 
"configure deployment source" and choose localgit.

Then you can hover over app service and click the upload button to redeploy.

Or use the same command line from above.

Also see this: https://maxant-vlk.scm.azurewebsites.net/

## Discord

https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot



## TODO

- git push: https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/tutorial-vscode-azure-cli-node/tutorial-vscode-azure-cli-node-04
- mongo: https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/deploy-nodejs-mongodb-app-service-from-visual-studio-code
- security: https://docs.microsoft.com/en-us/azure/developer/javascript/how-to/with-web-app/add-authentication-to-web-app

## Links

- Inspiration: https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/deploy-nodejs-azure-app-service-with-visual-studio-code?tabs=bash

- MS Code: https://github.com/Azure-Samples/js-e2e-express-server/

- node-red: https://nodered.org/docs/user-guide/runtime/embedding
