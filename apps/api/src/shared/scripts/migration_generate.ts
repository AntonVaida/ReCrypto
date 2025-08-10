import { execSync } from 'child_process';

const name = process.argv[2];

if (!name) {
  console.error('Error: migration name argument is required');
  process.exit(1);
}

const cmd = `pnpm typeorm migration:generate -d src/db/typeorm.config.ts src/db/migrations/${name}`;
console.log(`Running: ${cmd}`);

try {
  execSync(cmd, { stdio: 'inherit' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  process.exit(1);
}
