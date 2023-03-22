import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function MenuComponent() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="row menubtn">
        <div className="col-6">
            <Link to={"/advertise"}>
          <button style={{ background: "none", border: "none" }}>
            <RiImageAddFill />
          </button>
          </Link>
        </div>
        <div className="col-6">
          <Link to={"/Makepost"}>
            {" "}
            <button style={{ background: "none", border: "none" }}>
              <AiOutlineFileAdd />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
