1. create package.json file by "npm init"
2. 'npm install -D tailwindcss' - This will download the TW dependancies.
3. 'npx tailwindcss init' - This will initialise the tailwind.config file
4. create your Folder to place your HTML into. 
5. Specify the path for HTML in content - "./src/**/*.{html,js}"
6. Create a 'source' folder and place an Input.css in that.
7. copy @tailwind base; @tailwind components; @tailwind utilities;
8.  Run the 'npx tailwindcss -i ./src/input.css -o ./src/output.css --watch' - make sure the output is in the right folder
9. link the html to the correct output.css file. 
