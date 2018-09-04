module.exports = function (def, main) {
  if (process.argv.length <= 2) {
    def = def || this.help.bind(this)
    def()
  } else if (process.argv.length > 2 &&
    (process.argv[1] !== 'guld-sdk' &&
      !(process.argv[1] === 'guld' && process.argv[2] === 'sdk'))) {
    main = main || this.parse.bind(this)
    main(process.argv)
  }
}
