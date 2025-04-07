import { ProgrammingLanguages, Miscellaneous, Languages, SkillProps } from "../Skills"


function SkillList(title : string, skills : SkillProps[]){
  return(
    <table className={"w-full table-fixed"}>
      <tr>
        <th colSpan={2} className={"text-left pb-2 w-1/3"}>
          {title}
        </th>
      </tr>
      {skills.map((item, index) => {
        return (
        <tr key={item.name}>
          <td className={"pr-4"} width={"60%"}>
            {item.name}
          </td>
          <td>
            <progress value={item.level} max="5" className="progress">
              {"⭐".repeat(item.level)}
            </progress>
          </td>
        </tr>)
      })}
    </table>
  )
}

export default function SkillsSection(){
  return (
    <div className={"table clear-both w-[85vw] sm:w-[60vw]"}>
      <div className={"float-left p-4 sm:w-1/3 w-full"}>
      {SkillList("Programming Languages", ProgrammingLanguages)}
      </div>
      <div className={"float-left p-4 sm:w-1/3 w-full"}>
      {SkillList("Languages", Languages)}
      </div>
      <div className={"float-left p-4 sm:w-1/3 w-full"}>
      {SkillList("Other", Miscellaneous)}
      </div>
    </div>
    
  )
}