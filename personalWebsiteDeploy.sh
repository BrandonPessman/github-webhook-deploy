echo 'deploying personal website...'
cd
cd /var/www/personalWebsite/frontend
git pull
npm install
pm2 restart 0