cd api || exit
npx kill-port 6570
start http://localhost:6570/jilitodo/v1/swagger/#/
tsc --watch & npm run dev