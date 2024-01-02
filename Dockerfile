FROM node:20.10.0-bullseye as development

CMD [ "node", "dist/src/main.js" ]
