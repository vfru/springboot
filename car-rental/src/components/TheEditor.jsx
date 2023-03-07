import React, { useState, useEffect } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

export default function TheEditor(props) {
    //存储 editor 实例
    const [editor, setEditor] = useState(null)
    // 编辑器内容
    const [html, setHtml] = useState('')
    const { content, getcontent } = props
    // 工具栏配置
    const toolbarConfig = {

    }
    // 编辑器配置
    const editorConfig = {
        placeholder: '请输入内容...',
    }


    // 不能于editor共用一个useEffect,editor经常调用，会有问题
    useEffect(() => {
        setHtml(content)
        getcontent(content)
    }, [content, getcontent])

    // 及时销毁 editor ，重要！
    useEffect(() => {

        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => {
                        setHtml(editor.getHtml());
                        getcontent(editor.getHtml())

                    }}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {/* {html} */}
            </div>
        </>
    )


}
