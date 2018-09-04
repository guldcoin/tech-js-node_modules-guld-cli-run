module.exports = function (def, main) {
  if (process.argv.length <= 2) {
    def = def || this.help
    def.bind(this)()
  } else if (process.argv.length > 2 &&
    (process.argv[1].endsWith(this._name) ||
      (process.argv[1].endsWith(this._name.split('-')[0]) && process.argv[2].endsWith(this._name.split('-')[1])))) {
    main = main || this.parse
    main.bind(this)(process.argv)
  }
}
