module.exports = {
  siteMetadata: {
    title: `Pands Eating Lots`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}