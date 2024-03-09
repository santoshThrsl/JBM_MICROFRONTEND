const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "dmsDashboard": "http://localhost:4600/remoteEntry.js",
    "dmsUser": "http://localhost:4200/remoteEntry.js",
    "dmsCommon": "http://localhost:4300/remoteEntry.js",
    "dmsSharedLibrary": "http://localhost:4700/remoteEntry.js",
    "dmsSpare": "http://localhost:4400/remoteEntry.js",
    "dmsService": "http://localhost:4500/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
