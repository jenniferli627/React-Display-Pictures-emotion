/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Card = ({ imgUrl, title, ...rest }) => {
  return (
    <div
      css={css`
        flex: 1;
        flex-basis: 20%;
        min-width: 200px;
        height: 200px;
        overflow: hidden;
        background-color: white;
      `}
    >
      <img src={imgUrl} alt={`img-${title}`} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
