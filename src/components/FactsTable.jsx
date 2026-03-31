import React from "react";
// import "./FactsTable.css";

const FactsTable = () => {
  return (
    <section className="fact-table">
      <h2>Planetary Facts at a Glance</h2>
      <p>
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>
      <table>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </caption>
        <thead>
          <tr id="head-tr">
            <th colspan="2"></th>
            <th>Name</th>
            <th>Mass (10 24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m3)</th>
            <th>Gravity (m/s2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="double-span" rowspan="4" colspan="2">
              Terrestial Planets
            </td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td class="double-span" rowspan="4">
              Jovian Planets
            </td>
            <td class="double-span" rowspan="2">
              Gas Giants
            </td>
            <td>Jupiter</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td class="double-span" rowspan="2">
              Ice Giants
            </td>
            <td>Uranius</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td class="double-span" colspan="2" rowspan="2">
              Dwarf Planets
            </td>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default FactsTable;
