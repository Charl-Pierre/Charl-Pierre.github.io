export default function Checkbox({ label, value, onChange, className, showIcon=true } : {label: string, value: boolean, onChange: (event : boolean)=>void, className? : string, showIcon? : boolean}){
    return (
      <label className={className + " filterButton rounded-xl p-2 mx-0.5 cursor-pointer select-none"}>
          {label}
          <input className={"mx-1 align-middle"} hidden={!showIcon} type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} /> 
      </label>
    );
  };