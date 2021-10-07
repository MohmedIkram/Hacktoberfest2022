const { join } = require('path');
const { opendir } = require('fs/promises');

async function* walkdir(path, cb = () => true) {
  const dir = await opendir(path);

  for await (const item of dir) {
    const path = join(dir.path, item.name);

    if (item.isFile() && cb(path)) {
      yield path;
    } else if (item.isDirectory()) {
      yield* walkdir(path, cb);
    }
  }
}

module.exports = walkdir;