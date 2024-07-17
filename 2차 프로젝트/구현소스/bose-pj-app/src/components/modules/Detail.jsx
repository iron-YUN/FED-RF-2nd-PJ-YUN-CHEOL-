import React from "react";
import { products2 } from "../data/items_main_data";
import { productsDta } from "../data/items_detail_data";
import "./css/detail.scss";
function Detail({ src, type, idx, sel, pname }) {
  // console.log("야이", src);
  const selp = productsDta[type][idx];
  // console.log("야이자식들아", selp);
  return (
    <>
      <div className="detail">
        <h1>Product details</h1>
        <div className="dt-box1 dt-box">
          <div className="dt-img dt1 dt">
            <img
              src={process.env.PUBLIC_URL + src + idx + "/box.webp"}
              alt="box-img"
            />
          </div>
          <ul className="dt-imfo dt2 dt">
            {selp.Box.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="detail">
        <h1>Technical Specifications
        </h1>

        <table className="dt-box2 dt-box">
          <tbody>

          {selp.spec1.map((v, i) => (
          <tr key={i} className="dt-spec">
              <th className="">{v}</th>
              <td className="">{selp.spec2[i]}</td>
          </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Detail;
