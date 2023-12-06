module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'), // Path to your Tailwind CSS config file
        require('autoprefixer'),
    ],
}