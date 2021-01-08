import { responsiveFontSizes, createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      "spacing-xs-1": {
        margin: 0,
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: "24px",
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
