const { spawn } = require('child_process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const currentOS = process.platform;

async function genSitemap() {
  try {
    const {stdout, stderr } = await(exec(`cd ../../sitemaps/app && python app.py`));
    console.log('stdout:', stdout);

  } catch(err) {
    console.error(err);
  }
}

genSitemap()