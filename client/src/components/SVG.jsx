import React from 'react'

const SvgComponent = props => (
  <svg width={600} height={100} {...props}>
    <defs>
      <filter id="a">
        <feFlood floodColor="#000" result="black" />
        <feFlood floodColor="red" result="flood1" />
        <feFlood floodColor="#32cd32" result="flood2" />
        <feOffset in="SourceGraphic" dx={3} result="off1a" />
        <feOffset in="SourceGraphic" dx={2} result="off1b" />
        <feOffset in="SourceGraphic" dx={-3} result="off2a" />
        <feOffset in="SourceGraphic" dx={-2} result="off2b" />
        <feComposite in="flood1" in2="off1a" operator="in" result="comp1" />
        <feComposite in="flood2" in2="off2a" operator="in" result="comp2" />
        <feMerge result="merge1">
          <feMergeNode in="black" />
          <feMergeNode in="comp1" />
          <feMergeNode in="off1b" />
          <animate
            attributeName="height"
            dur="4s"
            values="10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px"
            keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1"
            repeatCount="indefinite"
          />
        </feMerge>
        <feMerge y={60} height={65} result="merge2">
          <feMergeNode in="black" />
          <feMergeNode in="comp2" />
          <feMergeNode in="off2b" />
          <animate
            attributeName="height"
            dur="4s"
            values="0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px; 0px; 0px; 10px"
            keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 1"
            repeatCount="indefinite"
          />
        </feMerge>
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="merge1" />
          <feMergeNode in="merge2" />
        </feMerge>
      </filter>
    </defs>
    <text
      y={100}
      style={{
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
      filter="url(#a)"
      fill="#fff"
      fontFamily="'Share Tech Mono',sans-serif"
      fontSize={100}
    >
      ROMAN
    </text>
  </svg>
)

export default SvgComponent