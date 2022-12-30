module.exports = {
    siteMetadata: {
      title: `Brett's Blog`,
      author: {
        name: `Brett Baisley`,
        bio: `A support engineer with 20 years experience, who started blogging as he incorrectly thought the rest of the world was interested in his thoughts and ideas.`,
      },
      description: `The personal, humorous blog of Brett Baisley, where the content is (mostly) made up and the points don't matter.`,
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
  