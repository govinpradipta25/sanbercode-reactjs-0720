import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="wrapper" style={{border: 'solid 1px black', padding:'20px', margin: '10% 25%', borderRadius: '20px'}}>
      <form>
        <h1 align="center"><b>Form Pembelian Buah</b></h1>

        <table border="0" cellspacing="10" width="600" align="center">
          <tr>
            <td><b>Nama Pelanggan</b></td>
            <td><input type="text" name="nama"/></td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'bottom'}}><b>Daftar Item</b></td>
            <td>
              <label><input type="checkbox" name="semangka" value="semangka"/>Semangka</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Jeruk</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Nanas</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Salak</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Anggur</label>
            </td>
          </tr>
          <td><button className="button" type="submit" name="simpan">Kirim</button></td>
        </table>
      </form>
    </div>
  );
}

export default App;
