# prettier-config

## Setup

```console
npm install --save-dev @paulhfischer/prettier-config
```

## Commands

Put this in `.prettierrc`:

```json
"@paulhfischer/prettier-config"
```

```console
npm exec -- prettier --write <PATH>...
```

Four spaces, single quotes, 100 columns and trailing commas; YAML uses two spaces.

### pre-commit

```yaml
- repo: https://github.com/paulhfischer/prettier-config
  rev: v2.0.0
  hooks:
      - id: lint
```

The hook skips HTML, PHP, minified files and `node_modules`; unsupported formats are ignored.
