import React from "react";
import { ThemeProvider } from "styled-components/native";

/* Styles */
import theme from './src/Global/Styles/theme';
/* Components */
import { Dashboard } from "./src/Screens/Dashboard";

export default function App() {
    return (
    <ThemeProvider theme={theme}>
        <Dashboard />
    </ThemeProvider>
)   ;
}
