module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['phantomjs-shim', 'mocha'],
    files: [
      'test/**/*\.spec\.js'
    ],
    exclude: [
      '**/*\.swp'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      'test/**/*\.spec\.js': ['webpack', 'sourcemap']
    },
    // webpack設定
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules\//
          }
        ],
        postLoaders: [
          {
            test: /\.js$/,
            exclude: /(test|node_modules)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    // mochaの実行結果とカバレッジを出力
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // PhantomJS上でテスト実行
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    // カバレッジ出力形式
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    }
  })
}
