const purgeList =
  process.env.BUILD_TYPE === 'mock'
    ? ['./mock/pages/**/*.html', './mock/pages/**/*.js']
    : ['./src/**/*.tsx']

module.exports = {
  purge: {
    mode: 'layers',
    layers: ['utilities'], // I don't want to purge the pseudo-classes in the component layer
    content: process.env.NODE_ENV === 'production' ? purgeList : false,
  },
  feature: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    container: {
      center: true,
    },
    // screens: {
    //   sm: '640px', // tablet
    //   md: '768px',
    //   lg: '1024px', // laptop
    //   xl: '1280px', // desktop
    // },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   white: '#ffffff',
    //   black: '#000000',
    //   gray: '#a0aec0', // If you don't write it, it won't load on pinegrow for some reason
    //   'black-22': '#222222',
    // },
    // backgroundColor: (theme) => ({
    //   ...theme('colors'),
    //   'black-22': '#222222',
    // }),
    // borderColor: (theme) => ({
    //   ...theme('colors'),
    //   'black-22': '#222222',
    // }),
    // textColor: {
    //   'black-22': '#222222',
    // },
    // backgroundImage: {
    //   'image-name': "url('/images/image-name.png')",
    // },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      base: ['1rem', { lineHeight: '1.5rem' }], // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      '5xl': ['3rem', { lineHeight: '1' }], // 48px
      '6xl': ['4rem', { lineHeight: '1' }], // 64px
      // [Custom]
      // Pixel-based sizes
      // 10: '0.625rem',
      // 11: '0.6875rem',
      // 12: '0.75rem',
      // 13: '0.8125rem',
      // 14: '0.875rem',
      // 15: '0.9375rem',
      // 16: '1rem',
      // 17: '1.0625rem',
      // 18: '1.125rem',
      // 19: '1.1875rem',
      // 20: '1.25rem',
      // 21: '1.3125rem',
      // 22: '1.375rem',
      // 23: '1.4375rem',
      // 24: '1.5rem',
      // 25: '1.5625rem',
      // 26: '1.625rem',
      // 27: '1.6875rem',
      // 28: '1.75rem',
      // 29: '1.8125rem',
      // 30: '1.875rem',
      // 32: '2rem',
      // 34: '2.125rem',
      // 36: '2.25rem',
      // 38: '2.375rem',
      // 40: '2.5rem',
      // 42: '2.625rem',
      // 44: '2.75rem',
      // 46: '2.875rem',
      // 48: '3rem',
      // 50: '3.125rem',
      // 52: '3.25rem',
      // 54: '3.375rem',
      // 56: '3.5rem',
      // 58: '3.625rem',
      // 60: '3.75rem',
      // 62: '3.875rem',
      // 64: '4rem',
    },
    spacing: {
      0: '0',
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      // [Custom]
      em: '1em',
      // Pixel-based sizes
      // 2: '0.125rem',
      // 4: '0.25rem',
      // 6: '0.375rem',
      // 8: '0.5rem',
      // 10: '0.625rem',
      // 12: '0.75rem',
      // 14: '0.875rem',
      // 16: '1rem',
      // 18: '1.125rem',
      // 20: '1.25rem',
      // 22: '1.375rem',
      // 24: '1.5rem',
      // 26: '1.625rem',
      // 28: '1.75rem',
      // 30: '1.875rem',
      // 32: '2rem',
      // 34: '2.125rem',
      // 36: '2.25rem',
      // 38: '2.375rem',
      // 40: '2.5rem',
      // 42: '2.625rem',
      // 44: '2.75rem',
      // 46: '2.875rem',
      // 48: '3rem',
      // 50: '3.125rem',
      // 52: '3.25rem',
      // 54: '3.375rem',
      // 56: '3.5rem',
      // 58: '3.625rem',
      // 60: '3.75rem',
      // 62: '3.875rem',
      // 64: '4rem',
      // 66: '4.125rem',
      // 68: '4.25rem',
      // 70: '4.375rem',
      // 72: '4.5rem',
      // 74: '4.625rem',
      // 76: '4.75rem',
      // 78: '4.875rem',
      // 80: '5rem',
      // 82: '5.125rem',
      // 84: '5.25rem',
      // 86: '5.375rem',
      // 88: '5.5rem',
      // 90: '5.625rem',
      // 92: '5.75rem',
      // 94: '5.875rem',
      // 96: '6rem',
      // 98: '6.125rem',
      // 100: '6.25rem',
      // 102: '6.375rem',
      // 104: '6.5rem',
      // 106: '6.625rem',
      // 108: '6.75rem',
      // 110: '6.875rem',
      // 112: '7rem',
      // 114: '7.125rem',
      // 116: '7.25rem',
      // 118: '7.375rem',
      // 120: '7.5rem',
      // 122: '7.625rem',
      // 124: '7.75rem',
      // 126: '7.875rem',
      // 128: '8rem',
      // 130: '8.125rem',
      // 132: '8.25rem',
      // 134: '8.375rem',
      // 136: '8.5rem',
      // 138: '8.625rem',
      // 140: '8.75rem',
      // 142: '8.875rem',
      // 144: '9rem',
      // 146: '9.125rem',
      // 148: '9.25rem',
      // 150: '9.375rem',
      // 152: '9.5rem',
      // 154: '9.625rem',
      // 156: '9.75rem',
      // 158: '9.875rem',
      // 160: '10rem',
      // 162: '10.125rem',
      // 164: '10.25rem',
      // 166: '10.375rem',
      // 168: '10.5rem',
      // 170: '10.625rem',
      // 172: '10.75rem',
      // 174: '10.875rem',
      // 176: '11rem',
      // 178: '11.125rem',
      // 180: '11.25rem',
      // 182: '11.375rem',
      // 184: '11.5rem',
      // 186: '11.625rem',
      // 188: '11.75rem',
      // 190: '11.875rem',
      // 192: '12rem',
      // 194: '12.125rem',
      // 196: '12.25rem',
      // 198: '12.375rem',
      // 200: '12.5rem',
      // 202: '12.625rem',
      // 204: '12.75rem',
      // 206: '12.875rem',
      // 208: '13rem',
      // 210: '13.125rem',
      // 212: '13.25rem',
      // 214: '13.375rem',
      // 216: '13.5rem',
      // 218: '13.625rem',
      // 220: '13.75rem',
      // 222: '13.875rem',
      // 224: '14rem',
      // 226: '14.125rem',
      // 228: '14.25rem',
      // 230: '14.375rem',
      // 232: '14.5rem',
      // 234: '14.625rem',
      // 236: '14.75rem',
      // 238: '14.875rem',
      // 240: '15rem',
      // 242: '15.125rem',
      // 244: '15.25rem',
      // 246: '15.375rem',
      // 248: '15.5rem',
      // 250: '15.625rem',
      // 252: '15.75rem',
      // 254: '15.875rem',
      // 256: '16rem',
      // 258: '16.125rem',
      // 260: '16.25rem',
      // 262: '16.375rem',
      // 264: '16.5rem',
      // 266: '16.625rem',
      // 268: '16.75rem',
      // 270: '16.875rem',
      // 272: '17rem',
      // 274: '17.125rem',
      // 276: '17.25rem',
      // 278: '17.375rem',
      // 280: '17.5rem',
      // 282: '17.625rem',
      // 284: '17.75rem',
      // 286: '17.875rem',
      // 288: '18rem',
      // 290: '18.125rem',
      // 292: '18.25rem',
      // 294: '18.375rem',
      // 296: '18.5rem',
      // 298: '18.625rem',
      // 300: '18.75rem',
      // 302: '18.875rem',
      // 304: '19rem',
      // 306: '19.125rem',
      // 308: '19.25rem',
      // 310: '19.375rem',
      // 312: '19.5rem',
      // 314: '19.625rem',
      // 316: '19.75rem',
      // 318: '19.875rem',
      // 320: '20rem',
      // 322: '20.125rem',
      // 324: '20.25rem',
      // 326: '20.375rem',
      // 328: '20.5rem',
      // 330: '20.625rem',
      // 332: '20.75rem',
      // 334: '20.875rem',
      // 336: '21rem',
      // 338: '21.125rem',
      // 340: '21.25rem',
      // 342: '21.375rem',
      // 344: '21.5rem',
      // 346: '21.625rem',
      // 348: '21.75rem',
      // 350: '21.875rem',
      // 352: '22rem',
      // 354: '22.125rem',
      // 356: '22.25rem',
      // 358: '22.375rem',
      // 360: '22.5rem',
      // 362: '22.625rem',
      // 364: '22.75rem',
      // 366: '22.875rem',
      // 368: '23rem',
      // 370: '23.125rem',
      // 372: '23.25rem',
      // 374: '23.375rem',
      // 376: '23.5rem',
      // 378: '23.625rem',
      // 380: '23.75rem',
      // 382: '23.875rem',
      // 384: '24rem',
      // 386: '24.125rem',
      // 388: '24.25rem',
      // 390: '24.375rem',
      // 392: '24.5rem',
      // 394: '24.625rem',
      // 396: '24.75rem',
      // 398: '24.875rem',
      // 400: '25rem',
      // 402: '25.125rem',
      // 404: '25.25rem',
      // 406: '25.375rem',
      // 408: '25.5rem',
      // 410: '25.625rem',
      // 412: '25.75rem',
      // 414: '25.875rem',
      // 416: '26rem',
      // 418: '26.125rem',
      // 420: '26.25rem',
      // 422: '26.375rem',
      // 424: '26.5rem',
      // 426: '26.625rem',
      // 428: '26.75rem',
      // 430: '26.875rem',
      // 432: '27rem',
      // 434: '27.125rem',
      // 436: '27.25rem',
      // 438: '27.375rem',
      // 440: '27.5rem',
      // 442: '27.625rem',
      // 444: '27.75rem',
      // 446: '27.875rem',
      // 448: '28rem',
      // 450: '28.125rem',
      // 452: '28.25rem',
      // 454: '28.375rem',
      // 456: '28.5rem',
      // 458: '28.625rem',
      // 460: '28.75rem',
      // 462: '28.875rem',
      // 464: '29rem',
      // 466: '29.125rem',
      // 468: '29.25rem',
      // 470: '29.375rem',
      // 472: '29.5rem',
      // 474: '29.625rem',
      // 476: '29.75rem',
      // 478: '29.875rem',
      // 480: '30rem',
      // 482: '30.125rem',
      // 484: '30.25rem',
      // 486: '30.375rem',
      // 488: '30.5rem',
      // 490: '30.625rem',
      // 492: '30.75rem',
      // 494: '30.875rem',
      // 496: '31rem',
      // 498: '31.125rem',
      // 500: '31.25rem',
      // 502: '31.375rem',
      // 504: '31.5rem',
      // 506: '31.625rem',
      // 508: '31.75rem',
      // 510: '31.875rem',
      // 512: '32rem',
      // 514: '32.125rem',
      // 516: '32.25rem',
      // 518: '32.375rem',
      // 520: '32.5rem',
      // 522: '32.625rem',
      // 524: '32.75rem',
      // 526: '32.875rem',
      // 528: '33rem',
      // 530: '33.125rem',
      // 532: '33.25rem',
      // 534: '33.375rem',
      // 536: '33.5rem',
      // 538: '33.625rem',
      // 540: '33.75rem',
      // 542: '33.875rem',
      // 544: '34rem',
      // 546: '34.125rem',
      // 548: '34.25rem',
      // 550: '34.375rem',
      // 552: '34.5rem',
      // 554: '34.625rem',
      // 556: '34.75rem',
      // 558: '34.875rem',
      // 560: '35rem',
      // 562: '35.125rem',
      // 564: '35.25rem',
      // 566: '35.375rem',
      // 568: '35.5rem',
      // 570: '35.625rem',
      // 572: '35.75rem',
      // 574: '35.875rem',
      // 576: '36rem',
      // 578: '36.125rem',
      // 580: '36.25rem',
      // 582: '36.375rem',
      // 584: '36.5rem',
      // 586: '36.625rem',
      // 588: '36.75rem',
      // 590: '36.875rem',
      // 592: '37rem',
      // 594: '37.125rem',
      // 596: '37.25rem',
      // 598: '37.375rem',
      // 600: '37.5rem',
      // 602: '37.625rem',
      // 604: '37.75rem',
      // 606: '37.875rem',
      // 608: '38rem',
      // 610: '38.125rem',
      // 612: '38.25rem',
      // 614: '38.375rem',
      // 616: '38.5rem',
      // 618: '38.625rem',
      // 620: '38.75rem',
      // 622: '38.875rem',
      // 624: '39rem',
      // 626: '39.125rem',
      // 628: '39.25rem',
      // 630: '39.375rem',
      // 632: '39.5rem',
      // 634: '39.625rem',
      // 636: '39.75rem',
      // 638: '39.875rem',
      // 640: '40rem',
      // 642: '40.125rem',
      // 644: '40.25rem',
      // 646: '40.375rem',
      // 648: '40.5rem',
      // 650: '40.625rem',
      // 652: '40.75rem',
      // 654: '40.875rem',
      // 656: '41rem',
      // 658: '41.125rem',
      // 660: '41.25rem',
      // 662: '41.375rem',
      // 664: '41.5rem',
      // 666: '41.625rem',
      // 668: '41.75rem',
      // 670: '41.875rem',
      // 672: '42rem',
      // 674: '42.125rem',
      // 676: '42.25rem',
      // 678: '42.375rem',
      // 680: '42.5rem',
      // 682: '42.625rem',
      // 684: '42.75rem',
      // 686: '42.875rem',
      // 688: '43rem',
      // 690: '43.125rem',
      // 692: '43.25rem',
      // 694: '43.375rem',
      // 696: '43.5rem',
      // 698: '43.625rem',
      // 700: '43.75rem',
      // 702: '43.875rem',
      // 704: '44rem',
      // 706: '44.125rem',
      // 708: '44.25rem',
      // 710: '44.375rem',
      // 712: '44.5rem',
      // 714: '44.625rem',
      // 716: '44.75rem',
      // 718: '44.875rem',
      // 720: '45rem',
      // 722: '45.125rem',
      // 724: '45.25rem',
      // 726: '45.375rem',
      // 728: '45.5rem',
      // 730: '45.625rem',
      // 732: '45.75rem',
      // 734: '45.875rem',
      // 736: '46rem',
      // 738: '46.125rem',
      // 740: '46.25rem',
      // 742: '46.375rem',
      // 744: '46.5rem',
      // 746: '46.625rem',
      // 748: '46.75rem',
      // 750: '46.875rem',
      // 752: '47rem',
      // 754: '47.125rem',
      // 756: '47.25rem',
      // 758: '47.375rem',
      // 760: '47.5rem',
      // 762: '47.625rem',
      // 764: '47.75rem',
      // 766: '47.875rem',
      // 768: '48rem',
    },
    maxWidth: {
      none: 'none',
      // xs: '20rem',
      // sm: '24rem',
      // md: '28rem',
      // lg: '32rem',
      // xl: '36rem',
      // '2xl': '42rem',
      // '3xl': '48rem',
      // '4xl': '56rem',
      // '5xl': '64rem',
      // '6xl': '72rem',
      // full: '100%',
      // [Custom]
      // '#': '#rem',
    },
    // lineHeight: {
    //   1: '1',
    //   '1-05': '1.05',
    //   '1-1': '1.1',
    //   '1-15': '1.15',
    //   '1-2': '1.2',
    //   '1-25': '1.25',
    //   '1-3': '1.3',
    //   '1-35': '1.35',
    //   '1-4': '1.4',
    //   '1-45': '1.45',
    //   '1-5': '1.5',
    //   '1-55': '1.55',
    //   '1-6': '1.6',
    //   '1-65': '1.65',
    //   '1-7': '1.7',
    //   '1-75': '1.75',
    //   '1-8': '1.8',
    //   '1-85': '1.85',
    //   '1-9': '1.9',
    //   '1-95': '1.95',
    //   2: '2',
    // },
    // letterSpacing: {
    //   0: '0',
    //   1: '0.0625rem',
    //   2: '0.125rem',
    //   3: '0.1875rem',
    //   4: '0.25rem',
    //   5: '0.3125rem',
    //   6: '0.375rem',
    //   7: '0.4375rem',
    //   8: '0.5rem',
    //   9: '0.5625rem',
    //   10: '0.625rem',
    //   11: '0.6875rem',
    //   12: '0.75rem',
    // },
    extend: {
      fontFamily: {
        sans:
          'Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, YuGothic, "Yu Gothic Medium", "Yu Gothic", Meiryo, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        // sans:
        //   'Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      inset: {
        // Do not add more, use margins (or negative margins) instead
        '1/2': '50%',
        full: '100%',
      },
      width: {
        // '#': '#rem',
      },
      minWidth: {
        // '#': '#rem',
      },
      maxWidth: {
        // '#': '#rem',
      },
      height: {
        // '#': '#rem',
      },
      minHeight: {
        // '#': '#rem',
      },
      maxHeight: {
        // '#': '#rem',
      },
    },
  },
  variants: {},
  plugins: [
    // require('./src/plugins/typekit/p-typekit-cover')(),
  ],
  corePlugins: {},
}
