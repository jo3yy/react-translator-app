import React, { useState } from 'react'

import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'Chinese',
    value: 'zh'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = () => {
  const [lang, setLang ] = useState(options[0])
  const [text, setText ] = useState('')


  return (
    <div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={lang}
        onSelectedChange={setLang}
      />
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={ (e) => setText(e.target.value)}/>
        </div>
      </div>      
      <hr />
      <h3 className="ui header">Translated Text:</h3>
      <Convert language={lang} text={text} />
    </div>
  )
}

export default Translate