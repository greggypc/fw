const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-project-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/templates/project.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/pages/about.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/pages/index.tsx"))),
  "component---src-pages-profile-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/pages/profile.tsx"))),
  "component---src-pages-projects-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/pages/projects.tsx"))),
  "component---src-pages-thanks-tsx": hot(preferDefault(require("/Users/greg/dev/FayeArchitects/fw/src/pages/thanks.tsx")))
}

