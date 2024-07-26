export default function Checkbox({ label, value, onChange, className } : {label: string, value: boolean, onChange: (event : boolean)=>void, className? : string}){
    return (
      <label className={className}>
        {label}
        <input className={"mr-4"} type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />        
      </label>
    );
  };