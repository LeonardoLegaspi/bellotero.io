import React from "react";

function InputGroup({ description, min, max, width = () => {}, state }) {
  const [input, setInput] = state;

  const onChangeSlider = (e) => {
    if (e.target.value < min) {
      setInput(min);
    } else if (e.target.value > max) {
      setInput(max);
    } else {
      setInput(e.target.value);
    }
  };

  return (
    <div className='input'>
      <div className='input--info'>
        <p className='label'>{description}</p>
        <div className='value'>
          <span>$</span>
          <input
            type='number'
            name=''
            id=''
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={onChangeSlider}
            min={min}
            max={max}
          />
        </div>
      </div>
      <input
        type='range'
        name='ingredient'
        style={{
          "--width": width(input),
        }}
        id=''
        min={min}
        max={max}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default InputGroup;
