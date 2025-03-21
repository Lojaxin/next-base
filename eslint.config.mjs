import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'public/**',
      'next-env.d.ts',
      'next.config.mjs',
      'postcss.config.mjs',
      'tailwind.config.mjs',
      'tsconfig.json',
      '.next/**',
      '.git/**',
      '.DS_Store',
      '.idea/**',
      '.vscode/**',
      '.env',
      'eslint.config.mjs',
      'prettier.config.mjs',
      'prettierignore',
      'eslintignore',
      'package.json',
      'package-lock.json',
      'tsconfig.json',
    ]
  }
];
export default eslintConfig;
