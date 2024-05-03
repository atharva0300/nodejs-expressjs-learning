# Benchmarking

1. node app.js
2. ```$ npx loadtest -n 1200 -c 400 -k http://localhost:3000/heavy```
3. node primary.js
4. ```$ npx loadtest -n 1200 -c 400 -k http://localhost:3000/heavy```

### There are some errors in primary.js file, fix it