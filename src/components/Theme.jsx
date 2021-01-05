import { responsiveFontSizes, createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default theme;
