import React, { memo } from 'react'

export default memo(function Diffcolormode() {
  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="blue"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="pink"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="green"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="yellow"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="grey"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>

    </>
  )
})
