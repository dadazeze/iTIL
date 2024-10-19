import React, { useEffect, useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 에디터의 스타일 추가
import "../../../../../app/globals.css"; //

type Props = {
  description: string;
  onGet: (text: string) => void;
};

export default function TextEditor(props: Props) {
  const { description, onGet } = props;
  const [postContent, setPostContent] = useState<string>(description);

  // useEffect(() => {
  //   if (description) {
  //     setPostContent(description);
  //   }
  // }, [description, postContent]);

  useEffect(() => {
    onGet(postContent);
  }, [postContent]);

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
    setPostContent(editor.getHTML()); // 에디터의 HTML 내용으로 상태 업데이트
  };

  return (
    <ReactQuill
      value={postContent}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      placeholder="오늘 공부한 내용을 작성하세요. 단 한줄도 괜찮아요 :)"
      className="h-full custom-quill"
    />
  );
}
