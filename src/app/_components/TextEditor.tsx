import React, { useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 에디터의 스타일 추가

export default function TextEditor() {
  const [content, setContent] = useState<string>("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleChange: ReactQuillProps["onChange"] = (
    content,
    delta,
    source,
    editor
  ) => {
    setContent(editor.getHTML()); // 에디터의 HTML 내용으로 상태 업데이트
  };

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      placeholder="오늘 공부한 내용을 작성하세요. 단 한줄도 괜찮아요 :)"
      className="h-full"
    />
  );
}