import React, { useEffect, useState, useRef } from 'react'

const Dropdown = (props) => {
  const { options, selected, onSelectedChange, label } = props
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect( () => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener('click', onBodyClick)

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])


  const renderedOptions = options.map(el => {
    if (selected.label === el.label) {
      return null
    } 

    return (
      <div 
        key={el.value} 
        className="item" 
        onClick={() => {
          onSelectedChange(el)
        }}
      >
        {el.label}
      </div>
    )
  })

  return(
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={() => {
            setOpen(!open)
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dropdown