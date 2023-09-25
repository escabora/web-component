const fontsPath = {
  ItauDisplay_300: `/assets/fonts/ItauDisplay_300.woff2`,
  ItauDisplay_700: `/assets/fonts/ItauDisplay_700.woff2`,
  ItauDisplay_900: `/assets/fonts/ItauDisplay_900.woff2`,
  ItauText_300: `/assets/fonts/itautext_300_new.woff2`,
  ItauText_400: `/assets/fonts/itautext_400_new.woff2`,
  ItauText_700: `/assets/fonts/itautext_700_new.woff2`,
  ItauText_900: `/assets/fonts/itautext_900_new.woff2`,
}

const configureFonts = ({fonts, fontDisplay }) => {
  console.log('teste', fontDisplay)
  const allFontsPromise = Object.keys(fonts).map((fontName) => {
    console.log(fonts[fontName])
    const weights = fonts[fontName]

    const promises = weights.map((weight) => {
      const fontUrl = fontsPath[`${fontName}_${weight}`]

      const font = new FontFace(fontName, `url(${fontUrl})`, {
        style: 'normal',
        weight: weight,
        display: fontDisplay,
      })

      return font.load().then(() => {
        document.fonts.add(font)
      })
    })

    return Promise.all(promises)
  })

  return Promise.all(allFontsPromise)
}

export default configureFonts
