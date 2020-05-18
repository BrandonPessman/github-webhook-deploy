echo 'Starting Deployment!'
cd /var/www/fableverse-backend/
git pull
echo 'Pulled from Github'
npm install
echo 'Installed Files'
pm2 restart 0
echo 'Build has been built'

