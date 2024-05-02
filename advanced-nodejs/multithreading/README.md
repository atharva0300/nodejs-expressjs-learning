# Benchmarking command 

1. In package.json, line 8 , it should be -> nodemon index.js
2. ```time curl --get http://localhost:3000/blocking```
3. In package.json  line 8, change it to -> nodemon index-four-workers.js
4. ```time curl --get http://localhost:300/blocking```