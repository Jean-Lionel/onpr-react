import React from 'react'
import ArticleList from '../components/admin/articles/ArticleList'

import '../styles/web.css'
import Carroussel from './web/Carroussel'
import Downloads from './web/Downloads'
import Footer from './web/footer/Footer'
import ImbededMap from './web/ImbededMap'
import Publicity from './web/Publicity'

export default function WebPortal() {
  return (
    <div className="web">
      <div className='accueil'>
        <div className='infos'>
          <Carroussel />

        </div>
        <div className='publicities'>
          <Publicity />
        </div>
      </div>

      <div className="articles">
        <ImbededMap /> 
        <Footer />
        
      </div>
      <div class="foot ">
        <Downloads />
      
      </div>
    </div>
   
  )
}
