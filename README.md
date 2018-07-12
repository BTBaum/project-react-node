## Instruction to run project

From the root directory:

- $ root directory, npm install

in a new terminal tab: 

- $ cd pricing-service, npm install, npm start

in a new terminal tab: 

- $ cd subscription-service, npm install, npm start

in a new terminal tab: 

- $ cd vehicle-service, npm install, npm start

in a new terminal tab: 

- $ cd client, npm install, npm start

Once all micro services are running, run from root directory:

- $ micro-proxy -r rules-dev.json -p 9000
