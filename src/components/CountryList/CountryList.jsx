// CountrySelectCustom.js
import React from "react";
import Select from "react-select";
import Flag from "react-world-flags";
import { countries } from "country-data";

const CountrySelectCustom = () => {
  // Mapping countries to options
  const options = countries.all.map((country) => ({
    value: country.alpha2,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Flag
          code={country.alpha2}
          style={{ width: "25px", marginRight: "10px" }}
        />
        {country.name} ({country.currencies[0]})
      </div>
    ),
  }));

  return <Select options={options} className="select" />;
};

export default CountrySelectCustom;
