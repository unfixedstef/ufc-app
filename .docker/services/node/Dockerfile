FROM node:7

# Install angular-cli
# https://www.npmjs.com/package/angular-cli
RUN npm install -g @angular/cli@1.0.0-beta.32.3

# Install watchman
# https://ember-cli.com/user-guide/#watchman
RUN npm install -g watchman

# Install typings
# https://github.com/typings/typings
RUN npm install -g typings

# Install Yarn
# https://yarnpkg.com/en/docs/install
RUN apt-key adv --fetch-keys http://dl.yarnpkg.com/debian/pubkey.gpg && \
echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update && apt-get install yarn

WORKDIR /workspace
