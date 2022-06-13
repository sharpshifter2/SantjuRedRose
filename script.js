const {createPool} = require('mysql2/promise');

async function main(){

  const conn = await createPool({
    database: 'diari',
    user: 'opo90rrtcyof',
    host: 'ku16rbi13smn.eu-central-2.psdb.cloud',
    password: 'pscale_pw_BuUk03bfvVZddtzOEGXdQ8qdQNYw9dER4JeBHmDaUuo',
    ssl: {rejectUnauthorized: false}
  });

  console.log('ready!');
}

main();