import './App.css';
import React, { Component } from 'react';
import Image from './components/Image';

class App extends Component {
  constructor() {
    super();
    this.tableGallery = {
      name: 'Table Gallery',
      cols: [
        'Column 1',
        'Column 2',
        'Column 3',
      ],
      listImgs: [
        [
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 1"},
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 2"},
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 3"}
        ],
        [
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 4"},
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 5"},
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 6"}
        ],
        [
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 7"},
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 8"},
          {src: "http://bit.ly/3ayPusa" ,alt: "Image 9"}
        ]
      ]
    }
  }
  render() {
    return(
      <div className="App">
        <h2>{this.tableGallery.name}</h2>
        <table>
          <tr>
            {
              this.tableGallery.cols.map((col, index) => <th key={index}>{col}</th>)
            }
          </tr>
          <tr>
            {
              this.tableGallery.listImgs[0].map((img, index) => <td><Image key={index} data={img}/></td>)
            }
          </tr>
          <tr>
            {
              this.tableGallery.listImgs[1].map((img, index) => <td><Image key={index} data={img}/></td>)
            }
          </tr>
          <tr>
            {
              this.tableGallery.listImgs[2].map((img, index) => <td><Image key={index} data={img}/></td>)
            }
          </tr>
          
        </table>
      </div>
    );
  }
}

export default App;
