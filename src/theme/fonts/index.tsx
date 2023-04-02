import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

import { css, Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Tiamat';
        src: url('//db.onlinewebfonts.com/t/e3e794f35cf6e4475f17d8f7a91df0a5.eot'),
          url('//db.onlinewebfonts.com/t/e3e794f35cf6e4475f17d8f7a91df0a5.eot?#iefix') format('embedded-opentype'),
          url('//db.onlinewebfonts.com/t/e3e794f35cf6e4475f17d8f7a91df0a5.woff2') format('woff2'),
          url('//db.onlinewebfonts.com/t/e3e794f35cf6e4475f17d8f7a91df0a5.woff') format('woff'),
          url('//db.onlinewebfonts.com/t/e3e794f35cf6e4475f17d8f7a91df0a5.ttf') format('truetype'),
          url('//db.onlinewebfonts.com/t/e3e794f35cf6e4475f17d8f7a91df0a5.svg#Tiamat Condensed SC Regular Regular')
            format('svg');
      }
    `}
  />
)

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
}

export { Fonts }
export default fonts
