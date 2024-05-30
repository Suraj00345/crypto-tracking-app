import React, { useState } from "react";
import "./style.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 200) + "<p style='color:var(--grey)'> Read More...</p>";
  const LongDesc =
    desc + "<p style='color:var(--grey)'> Read less...</p>";

  const [flag, setFlag] = useState(false);

  return (
    <div className="grey-wrapper-div">
      <h2>{heading}</h2>
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : LongDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
}

export default CoinInfo;
