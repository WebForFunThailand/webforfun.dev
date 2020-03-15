module.exports = {
  siteMetadata: {
    title: `Web For Fun Hackathon 2020`,
    description: `งาน Web For Fun เป็นงาน Hackathon สำหรับผู้เริ่มต้นที่มีความสนใจในด้านการพัฒนาเว็บไซต์ ให้ได้พัฒนาฝีมือ, เรียนรู้จากผู้มีประสบการณ์ และพบปะเพื่อน ๆ ที่มีความชอบเหมือนกัน โดยในงานจะมีเหล่านักพัฒนาที่มีประสบการณ์แล้วคอยให้คำแนะนำ และช่วยเหลือในแต่ละทีม นอกจากนี้ภายในงานจะมี Workshop ต่างๆ เพื่อให้นักพัฒนาแต่ละคนสามารถคิดไอเดียออกมาได้สนุกที่สุด`,
    author: `@webforfun`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
