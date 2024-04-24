We need to follow the steps to generate the required api endpoint:-

1) First we need to clone the repository
2) 'python' and 'docker desktop' needs to be installed in the local system
3) In the terminal cd to this "DOCTOR-RECOMMENDATION-SYSTEM" directory
4) Run the following commands:

   1)     sudo docker build -t backend:latest -f Dockerfile .

   This can take some time to setup

   2)     sudo docker run -p 8000:8000  backend:latest  

Skip 'sudo' word from the command if authorization is given for all users in docker

The backend is ready now moving onto the front end set up!
1) In another terminal cd to the 'front_google' directory
2) run the commands

    1)     npm i
    2)     node index.js

5) go to "http://localhost:3000/"
6) Enter your symptoms and click submit
 
A diagnosis page will come up telling suspected diseases and recommended doctors!

Thankyou!!
