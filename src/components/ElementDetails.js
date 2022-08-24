
const ElementDetails = ({head, text}) => {
  return (
    <div className="w-full">
      <h3 className="text-[#969696] text-[0.75rem] tracking-[0.15rem] pt-8 pl-8 pb-3 uppercase font-semibold ">{head}</h3>
      <p className="pl-8 text-2xl font-bold">{text}</p>
    </div>
  )
}

export default ElementDetails