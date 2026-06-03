import { Font } from '@react-pdf/renderer';

export function registerFonts() {
  Font.register({
    family: 'Lato',
    src: 'https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHvxk.ttf',
    fontWeight: 400,
  });

  Font.register({
    family: 'Lato',
    src: 'https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh6UVew8.ttf',
    fontWeight: 700,
  });

  Font.register({
    family: 'Playfair Display',
    src: 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQ.ttf',
    fontWeight: 400,
  });

  Font.register({
    family: 'Playfair Display',
    src: 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiukDQ.ttf',
    fontWeight: 700,
  });
}

