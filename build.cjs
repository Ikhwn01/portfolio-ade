const fs = require('fs');
const { execSync } = require('child_process');

console.log('[Build] Current directory:', process.cwd());

if (fs.existsSync('./client') && fs.existsSync('./client/package.json')) {
  console.log('[Build] Detected root directory with client/ folder.');
  execSync('npm --prefix client install && npm --prefix client run build', { stdio: 'inherit' });
  
  if (fs.existsSync('./client/dist')) {
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('./dist', { recursive: true });
    }
    fs.cpSync('./client/dist', './dist', { recursive: true });
    console.log('[Build] Successfully synchronized client/dist to ./dist');
  }
} else {
  console.log('[Build] Detected running directly inside client folder.');
  execSync('npm run build', { stdio: 'inherit' });
}
