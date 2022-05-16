import React from 'react'
import ArticleList from '../components/admin/articles/ArticleList'

import '../styles/web.css'
import Carroussel from './web/Carroussel'

export default function WebPortal() {
  return (
    <div className="web">
      <div className='accueil'>
        <div className='infos'>
          <Carroussel />

        </div>
        <div className='publicities'>

        </div>
      </div>

      <div className="articles">
        <ArticleList />
      </div>

    </div>
  )
}
