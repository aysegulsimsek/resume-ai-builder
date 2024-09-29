import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function RichTextEditor() {
    const [value, setValue] = useState();
    return (
        <div><Editor
            editorState={value}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(e)=>setValue(e.target.value)}
        />
        </div>
    )
}

export default RichTextEditor