import React from 'react'
import axios from 'axios';
// import MyPDF from '../../public/assets/formulaire CV.pdf';

const Downloads = () => {
  const handleDownload = (url, filename) => {
    axios.get(url, { responseType: 'blob', })
      .then((res) => {
        // fileDownload(res.data, filename)
      })
  }
  return (

    <div>
      <button onClick={() => {
        this.handleDownload('./assets/dormulaire.pdf', 'test-download.jpg')
      }}>Download Image</button>

      <a href='' target="_blank" rel="noopener noreferrer" download>
        <button>
          <i className="fas fa-download" />
          Download File
        </button>
      </a>
    </div>


  )
}

export default Downloads 