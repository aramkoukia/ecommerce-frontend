module.exports = {
  pathPrefix: '/mini-gatsbyv2-material-kit-react',
  siteMetadata: {
    title: 'LED Lights and Parts',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Default to 100
        contentTypes: ['category', 'promotion', 'product'],
        // Possibility to login with a strapi user,
        // when content types are not publically available(optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
  ],
};
