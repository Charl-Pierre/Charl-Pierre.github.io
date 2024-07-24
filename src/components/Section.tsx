import React from 'react';

function Section(props : any) {
  var justification = "justify-center";
  var titleAlign = "text-center"
  switch(props.align){
    case "left":
      justification = "justify-center sm:justify-start";
      titleAlign = "text-left;"
      break;
    case "right":
      justification = "justify-center sm:justify-end";
      titleAlign = "text-right";
      break;
  }

  return (
    <div id={props.id} className={`flex m-4 w-[60vw] ${justification}`}>
      <div>
        <p className={`text-3xl ${titleAlign}`}>
          {props.header}
        </p>
        <div className={'bg-[#3081b3] rounded-lg max-w-[90vw] sm:max-w-[50vw] p-4 text-center'}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Section