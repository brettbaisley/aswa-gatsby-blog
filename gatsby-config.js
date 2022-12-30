module.exports = {
    siteMetadata: {
      title: `Brett's Blog`,
      author: {
        name: `Brett Baisley`,
        bio: `a long time support engineer, who started blogging as he incorrectly thought the rest of the world was interested in his thoughts and ideas.`,
      },
      description: `The personal blog of Brett Baisley`,
      siteUrl: `https://blog.baisley.dev`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
          name: `blog`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [],
        },
      }
    ],
  }
  