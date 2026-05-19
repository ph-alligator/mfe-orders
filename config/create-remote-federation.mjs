import { federationShared } from './federation.shared.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function getPortForRemote(_remoteName, packageDir) {
  const pkgPath = resolve(__dirname, '..', packageDir === '.' ? '.' : packageDir, 'package.json');
  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    const m = (pkg.scripts?.dev ?? '').match(/--port\s+(\d+)/);
    if (m) return Number(m[1]);
  }
  const vitePath = resolve(__dirname, '..', packageDir === '.' ? '.' : packageDir, 'vite.config.ts');
  if (existsSync(vitePath)) {
    const m = readFileSync(vitePath, 'utf-8').match(/port:\s*(\d+)/);
    if (m) return Number(m[1]);
  }
  throw new Error(`Cannot detect port in ${packageDir}`);
}

/**
 * @param {{ name: string, packageDir?: string, exposes: Record<string, string> }} opts
 */
export function createRemoteFederation({ name, packageDir, exposes }) {
  return {
    name,
    filename: 'remoteEntry.js',
    exposes,
    shared: federationShared,
    dts: false,
  };
}

/**
 * @param {string} name - federation name
 * @param {string} [packageDir] - default mfe-{name}
 */
export function createRemoteServer(name, packageDir) {
  const dir = packageDir ?? `mfe-${name}`;
  const port = getPortForRemote(name, dir);
  return {
    port,
    strictPort: true,
    cors: true,
    origin: `http://localhost:${port}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
}

export function createRemotePreview(name, packageDir) {
  const dir = packageDir ?? `mfe-${name}`;
  const port = getPortForRemote(name, dir);
  return {
    port,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
}
