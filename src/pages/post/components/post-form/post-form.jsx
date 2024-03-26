/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2, Input } from "../../../../components";
import { Icon } from "../../../../components/header/components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { sanitizeContent } from "./utils/sanitize-content";
import { useDispatch } from "react-redux";
import { RESET_POST_DATA, savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

export const PostForm = ({
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [newTitle, setNewTitle] = useState(title);
  const contentRef = useRef("");
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    console.log("uselayout");
    setNewImageUrl(imageUrl);
    setNewTitle(title);
  }, [imageUrl, title]);

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent,
      })
    ).then(() => navigate("/post/" + id));
  };

  const onImageUrlChange = ({ target }) => setNewImageUrl(target.value);
  const onTitleChange = ({ target }) => setNewTitle(target.value);

  return (
    <PostFormContainer>
      <Input
        value={newImageUrl}
        onChange={onImageUrlChange}
        type="text"
        placeholder={"Ссылка на фото..."}
      />
      <Input
        value={newTitle}
        onChange={onTitleChange}
        type="text"
        placeholder={"Загаловок..."}
      />
      <SpecialPanel
        margin={"-20px 0 20px"}
        {...{ publishedAt, id }}
        editButton={<Icon id="fa-floppy-o" margin="0 10px" onClick={onSave} />}
      />
      <div
        ref={contentRef}
        className={"post-text"}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {content}
      </div>
    </PostFormContainer>
  );
};

const PostFormContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  "& .post-text": {
    whiteSpace: "pre-line",
    border: "1px solid black",
    minHeight: "80px",
  },
});
