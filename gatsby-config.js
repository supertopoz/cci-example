module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: `/cci-example`,
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [`gatsby-plugin-styled-components`],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Rubik\:100`]
      }
    }
  ]

};
