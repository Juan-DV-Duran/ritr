import React from "react";
import mapImage from "./map/ritrmap.png";
import "./GalacticRimMap.css";
class GalacticRimMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employee: {} };
  }

  render() {
    return (
      <>
        <h2>The Galactic Rim</h2>
        <img src={mapImage} alt="Map of the Rim" className="mapRim" />
      </>
    );
  }
}

export { GalacticRimMap };
