import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * Flat ESLint config.
 *
 * `eslint-config-next` exports native flat presets, so no legacy `FlatCompat`
 * bridge is needed. `core-web-vitals` bundles the Next.js, React, import and
 * accessibility rules; `typescript` layers typescript-eslint on top.
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;