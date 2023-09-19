import React from "react";
import ContentLoader from "react-content-loader";

import "./bookSkeleton.scss";

const BookSkeleton = (props) => (
  <ContentLoader
    className="skeleton"
    speed={1}
    width={172}
    height={239}
    viewBox="0 0 172 239"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="172" height="239" />
  </ContentLoader>
);

export default BookSkeleton;
