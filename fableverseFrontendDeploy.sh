echo 'Starting Deployment!'
cd /var/www/fableverse-frontend/frontend/
git pull
echo 'Pulled from Github'
npm install
echo 'Installed Files'
npm run build
echo 'Build has been built'

