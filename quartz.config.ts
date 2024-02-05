import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "💻 B.log()",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "rithikasilva.github.io/b.log-",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // Background
          lightgray: "#e5e5e5", // Borders
          gray: "#b8b8b8", // Graph links, heavier borders
          darkgray: "#f8f9fa", // Body text
          dark: "#2b2b2b", // header text and icons
          secondary: "#284b63", // link colour, current graph node
          tertiary: "#84a59d", // hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal background, highlighted text, highlighted lines of code
        },
        darkMode: {
          light: "#131415", // Background
          lightgray: "#393639", // Borders
          gray: "#646464", // Graph linkes, heavier borders
          darkgray: "#f8f9fa", // body text
          dark: "#ebebec", // header text and icons
          secondary: "#6c757d", // link colour, current graph node
          tertiary: "#84a59d", // hover states and visited garph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal background, highlighted text, highlighted lines of code
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssLimit: 5,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
