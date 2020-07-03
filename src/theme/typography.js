import palette from './palette';

export default {
  fontFamily: [
    "proxima nova", "Helvetica Neue", 'Helvetica, Arial, Sans-serif'
  ].join(','),
  h1: {
    color: palette.text.primary,
  },
  h2: {
    fontFamily: ["neosans regular", "Helvetica Neue", 'Helvetica, Arial, Sans-serif'].join(','),
    fontWeight: 'bold',
    color: palette.text.secondary,
  },
  h3: {
    color: palette.text.primary,
  },
  h4: {
    color: palette.text.primary,
  },
  h5: {
    color: palette.text.primary,

  },
  h6: {
    color: palette.text.secondary,
  },
  subtitle1: {
    color: palette.text.secondary,
  },
  subtitle2: {
    color: palette.text.secondary,
  },
  body1: {
    color: palette.text.primary,
  },
  body2: {
    color: palette.text.secondary,

  },
  button: {
    color: palette.text.primary,

  },
  caption: {
    color: palette.text.secondary,

  },
  overline: {
    color: palette.text.secondary,

  }
};
