module.exports = {
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
