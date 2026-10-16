# prettier-config

Prettier-config for projects.

### Usage

#### pre-commit

Add the hook to your `.pre-commit-config.yaml`:

```yaml
- repo: https://github.com/paulhfischer/prettier-config
  rev: v2.0.0
  hooks:
      - id: lint
```

The hook formats all files supported by prettier, except for HTML- and PHP-files (which usually
contain template code). Files prettier can't format are skipped.

Add the prettier configuration to your `.prettierrc`:

```json
"@paulhfischer/prettier-config"
```

#### npm

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/prettier-config
    ```

    _Note: Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the prettier configuration to your `.prettierrc` (or the `prettier`-key of your
   `package.json`):

    ```json
    "@paulhfischer/prettier-config"
    ```
