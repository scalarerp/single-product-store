module.exports = {
  siteMetadata: {
    title: `Single Product Store.`,
    description: `The simplest way to sell something online.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `single-product-store`,
        short_name: `singleproduct.store`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#433F4F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-93793174-4",
        head: false
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=e3d40026264a982baf0275441&amp;id=23400ce5fc"
      }
    }
  ]
};
