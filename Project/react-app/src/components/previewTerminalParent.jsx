import React from "react";
import { EditorContext } from "@/contexts/editor-context";
import { Terminal as XTerminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { ResizableViewsVertical } from "./resizableViews";
import { PreviewComponent } from "./reactPreview";
import Terminal from "./terminal";
import { useTheme } from "@mui/material";

const WebPreviewTerminalParent = ({ }) => {
    const theme = useTheme();
    const terminalBackground = theme.palette.utilBar.default;
    const terminalForeground = theme.palette.secondary.main;

    const items = [
        {
            slot: 0,
            component: <PreviewComponent terminal_instance={terminal_instance} />
        },
        {
            slot: 1,
            component: <Terminal terminal_instance={terminal_instance} fitAddon={fitAddon} background={terminalBackground} />
        }
    ]

    return (<>
        <ResizableViewsVertical items={items} />
    </>)
}

export default WebPreviewTerminalParent;