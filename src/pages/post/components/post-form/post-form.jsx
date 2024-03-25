/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2, Input } from "../../../../components";
import { Icon } from "../../../../components/header/components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useRef } from "react";
import { sanitizeContent } from "./utils/sanitize-content";
import { useDispatch } from "react-redux";
import { savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

export const PostForm = ({
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent,
      })
    );
  };
  return (
    <PostFormContainer>
      <Input ref={imageRef} type="text" defaultValue={imageUrl} />
      <Input ref={titleRef} type="text" defaultValue={title} />
      <SpecialPanel
        margin={"-20px 0 20px"}
        {...{ publishedAt }}
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
  },
});
