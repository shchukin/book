module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-preset-env': {
            stage: 1, // Adjust the stage according to your needs
            features: {
                'nesting-rules': true, // Example feature
            },
        },
    },
};
