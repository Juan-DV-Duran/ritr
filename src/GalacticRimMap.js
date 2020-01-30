import React from "react";
import "./styling/GalacticRimMap.css";
class GalacticRimMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employee: {} };
  }

  render() {
    return (
      <>
        <h2>The Galactic Rim</h2>

        <svg width="500" height="750">
          <a href="#">
            <polygon
              points="0 0 275 0 250 35 230 50 50 150 25 80 0 40"
              fill="#FCF3CF"
            />
            <text
              x="80"
              y="50"
              fill="#FFFFFF"
              text-anchor="middle"
              alignment-baseline="middle"
            >
              Sector 1
            </text>
          </a>

          <polygon
            points="275 0 500 0 500 140 50 150 230 50 250 35"
            fill="#D7BDE2"
          />

          <polygon
            points="500 140 50 150 125 325 360 305 460 290 500 340"
            fill="#D98880"
          />
        </svg>
      </>
    );
  }
}

export { GalacticRimMap };
