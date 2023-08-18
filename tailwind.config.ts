module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        height: {
          '128': '80vh',
           '136': '120vh',
           '155': '140vh'
        },
        colors: {
            'eazigreen': '#11453B',
            'eazipeach':'#ea4e4b',
            'eazigold':'#b4a571',
            'eaziblack':'#515251'
          },
      }
    }
  }