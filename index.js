/** @satisfies {import('prettier').Config} */
const config = {
    printWidth: 100,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
