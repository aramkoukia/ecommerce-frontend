const path = require('path');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      return result;
    }),
  );
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getCategories = makeRequest(graphql, `
      query {
        categories: allStrapiCategory {
          edges {
            node {
              id
              Name
              Thumbnail {
                url
                name
              }
              Products {
                ProductCode
                ProductName
                ShortDescription
                Image {
                  id
                  url
                }
              }
            }
          }
        }
        promotions: allStrapiPromotion {
          edges {
            node {
              id
              Title
              Description
            }
          }
        }
      }
    `).then((result) => {
    // Create pages for each article.
    result.data.categories.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve('src/templates/product-by-category.jsx'),
        context: {
          id: node.id,
        },
      });
    });
    result.data.promotions.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve('src/pages/Promotion/Promotion.jsx'),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getCategories;
};
