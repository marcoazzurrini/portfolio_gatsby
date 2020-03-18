/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: "Marco Azzurrini developer",
    author: "Marco Azzurrini",
    description:
      "Marco Azzurini, Frontend web developer specializing in React.js. With an emphansis on testing, performance and elegant design patterns Marco has built several web applications.",
    siteUrl: "https://marcoazzurrini.com/",
    social: [
      {
        name: "linkedin",
        url: "https://linkedin.com/in/marcoazzurrini",
      },
      {
        name: "github",
        url: "https://github.com/marcoazzurrini",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marco Azzurrini Dev`,
        short_name: `Azzurrini Dev`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/img/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Libre Baskerville, Montserrat"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    `gatsby-plugin-csp`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
