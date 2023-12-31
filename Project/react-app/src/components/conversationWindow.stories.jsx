import React from "react";
import { ConversationWindow } from "@/components/ConversationWindow";
import { theme } from "../thatOneStuffFolderUsuallyCalledUtils/themes";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@mui/material";
import "../reset.css"
import { EditorContextProvider } from "@/contexts/editor-context";

export default {
    title: "Components/ConversationWindow",
    component: ConversationWindow,
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                dark: theme,
            },
            defaultTheme: "dark",
            Provider: ThemeProvider,
        }),
    ]
};

const Template = (args) => {
    return (
        <EditorContextProvider>
            <ConversationWindow {...args} />
        </EditorContextProvider>
    )
}
export const Default = Template.bind({});
Default.args = {

};