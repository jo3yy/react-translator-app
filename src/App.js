import React from 'react'

import Translate from './components/Translate'

export default () => {
  return(
    <div className="ui text container">
      <header className="ui huge header" style={{textAlign: 'center'}}>
        Text Translator
      </header>
      <Translate />
    </div>
  )
}