exports.config = {
  namespace: 'limeccomponent',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  copy: [
    {
      src: 'lime-web-component-platform.browser.js',
      src: 'lime-web-component.manifest.json'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
