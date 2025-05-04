import React from 'react';


const tablaPosiciones = () => {
    return(
       

<div className="relative overflow-x-auto rounded-lg shadow-lg">
  <table className="w-full text-sm text-left text-white">
    <thead className="text-xs uppercase bg-[#ffc200] text-[#0D0C3C]">
      <tr>
        <th scope="col" className="px-6 py-3">POS</th>
        <th scope="col" className="px-6 py-3">EQUIPO</th>
        <th scope="col" className="px-6 py-3">PJ</th>
        <th scope="col" className="px-6 py-3">PG</th>
        <th scope="col" className="px-6 py-3">PE</th>
        <th scope="col" className="px-6 py-3">PP</th>
        <th scope="col" className="px-6 py-3">GF</th>
        <th scope="col" className="px-6 py-3">GC</th>
        <th scope="col" className="px-6 py-3">DIF</th>
        <th scope="col" className="px-6 py-3">PTS</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
          1
        </th>
        <td className="px-6 py-4">JUVENTUD MILLA</td>
        <td className="px-6 py-4">8</td>
        <td className="px-6 py-4">5</td>
        <td className="px-6 py-4">2</td>
        <td className="px-6 py-4">1</td>
        <td className="px-6 py-4">10</td>
        <td className="px-6 py-4">3</td>
        <td className="px-6 py-4">7</td>
        <td className="px-6 py-4">17</td>
      </tr>
      <tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
          2
        </th>
        <td className="px-6 py-4">FAMILIA RIMENSE</td>
        <td className="px-6 py-4">8</td>
        <td className="px-6 py-4">5</td>
        <td className="px-6 py-4">1</td>
        <td className="px-6 py-4">2</td>
        <td className="px-6 py-4">9</td>
        <td className="px-6 py-4">5</td>
        <td className="px-6 py-4">4</td>
        <td className="px-6 py-4">16</td>
      </tr>
      <tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">3</th>
  <td className="px-6 py-4">LA QUEBRADA</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">4</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">12</td>
  <td className="px-6 py-4">7</td>
  <td className="px-6 py-4">5</td>
  <td className="px-6 py-4">14</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">4</th>
  <td className="px-6 py-4">BREVETE RIMAC</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">4</td>
  <td className="px-6 py-4">1</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">11</td>
  <td className="px-6 py-4">9</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">13</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">5</th>
  <td className="px-6 py-4">LAS TEJAS</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">10</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">12</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">6</th>
  <td className="px-6 py-4">6 DE AGOSTO FC</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">9</td>
  <td className="px-6 py-4">9</td>
  <td className="px-6 py-4">0</td>
  <td className="px-6 py-4">11</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">7</th>
  <td className="px-6 py-4">UNION CANTERA</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">7</td>
  <td className="px-6 py-4">10</td>
  <td className="px-6 py-4">-3</td>
  <td className="px-6 py-4">9</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">8</th>
  <td className="px-6 py-4">LA C</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">4</td>
  <td className="px-6 py-4">6</td>
  <td className="px-6 py-4">11</td>
  <td className="px-6 py-4">-5</td>
  <td className="px-6 py-4">8</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">9</th>
  <td className="px-6 py-4">PURITO BARRIO</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">1</td>
  <td className="px-6 py-4">3</td>
  <td className="px-6 py-4">4</td>
  <td className="px-6 py-4">5</td>
  <td className="px-6 py-4">13</td>
  <td className="px-6 py-4">-8</td>
  <td className="px-6 py-4">6</td>
</tr>
<tr className="bg-[#0D0C3C] border-b border-[#ffffff]">
  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">10</th>
  <td className="px-6 py-4">6 DE AGOSTO JR</td>
  <td className="px-6 py-4">8</td>
  <td className="px-6 py-4">1</td>
  <td className="px-6 py-4">2</td>
  <td className="px-6 py-4">5</td>
  <td className="px-6 py-4">4</td>
  <td className="px-6 py-4">14</td>
  <td className="px-6 py-4">-10</td>
  <td className="px-6 py-4">5</td>
</tr>

    </tbody>
  </table>
</div>


    )

};

export default tablaPosiciones;