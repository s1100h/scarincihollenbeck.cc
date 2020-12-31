const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function genSitemap() {
  try {
    const { stdout } = await exec('cd ../../sitemaps/app && python app.py');
    console.warn('stdout:', stdout);
  } catch (err) {
    console.error(err);
  }
}

genSitemap();
