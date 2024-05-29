import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/GridHelper.ts'),
      name: 'GridHelper',
      fileName: 'grid-helper'
    }
  }
});