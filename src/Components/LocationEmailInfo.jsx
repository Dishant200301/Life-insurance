import React from "react";
import { Link } from "react-router-dom";

const LocationEmailInfo = () => (
  <div className="d-flex flex-wrap">
    <div className="border-end border-primary pe-3">
      <Link to="/locations" className="text-muted small">
        <i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location
      </Link>
    </div>
    <div className="ps-3">
      <Link to="mailto:example@gmail.com" className="text-muted small">
        <i className="fas fa-envelope text-primary me-2"></i>example@gmail.com
      </Link>
    </div>
  </div>
);

export default LocationEmailInfo;
