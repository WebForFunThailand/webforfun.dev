module.exports = {
  siteMetadata: {
    title: `Web For Fun Hackathon 2020`,
    description: `งาน Web For Fun เป็นงาน Hackathon สำหรับผู้เริ่มต้นที่มีความสนใจในด้านการพัฒนาเว็บไซต์ ให้ได้พัฒนาฝีมือ, เรียนรู้จากผู้มีประสบการณ์ และพบปะเพื่อน ๆ ที่มีความชอบเหมือนกัน โดยในงานจะมีเหล่านักพัฒนาที่มีประสบการณ์แล้วคอยให้คำแนะนำ และช่วยเหลือในแต่ละทีม นอกจากนี้ภายในงานจะมี Workshop ต่างๆ เพื่อให้นักพัฒนาแต่ละคนสามารถคิดไอเดียออกมาได้สนุกที่สุด`,
    author: `@webforfun`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-160709382-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "200512364567193",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `benefits`,
        path: `${__dirname}/src/images/benefits`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallerys`,
        path: `${__dirname}/src/images/gallerys`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reviewers`,
        path: `${__dirname}/src/images/reviewers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sponsors`,
        path: `${__dirname}/src/images/sponsors`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
