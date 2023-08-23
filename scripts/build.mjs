import shell from 'shelljs';
import esbuild from 'esbuild';

const OUTPUT_DIRECTORY = 'dist';

const buildOptions = {
  entryPoints: ['src/index.ts'],
  format: 'esm',
  bundle: true,
  platform: 'node',
  external: [],
  outfile: `${OUTPUT_DIRECTORY}/index.mjs`,
  logLevel: 'debug',
};

function clean() {
  const path = `${OUTPUT_DIRECTORY}/*`;
  console.info(`Cleaning ${path}`);
  shell.rm('-rf', path);
}

function build() {
  return esbuild.build(buildOptions);
}

clean();
build().catch((error) => {
  console.error(error);
  process.exit(1);
});
