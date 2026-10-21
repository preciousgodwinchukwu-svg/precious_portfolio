// Local fallback for Windows devices that cannot load native Node compiler modules.
// Vercel uses the standard build script and its native compiler.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
const require = createRequire(import.meta.url);
const mode = process.argv[2] || 'dev';
if (!['dev', 'build', 'start'].includes(mode)) throw new Error('Expected dev, build or start');
const args = [require.resolve('next/dist/bin/next'), mode];
if (mode !== 'start') args.push('--webpack');
if (mode !== 'build') args.push('--hostname', '127.0.0.1');
const child = spawn(process.execPath, args, {
  stdio: 'inherit',
  env: { ...process.env, NEXT_TEST_WASM_DIR: dirname(require.resolve('@next/swc-wasm-nodejs')) },
  windowsHide: true,
});
child.on('exit', code => process.exit(code ?? 1));
child.on('error', error => { console.error(error.message); process.exit(1); });
