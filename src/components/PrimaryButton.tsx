
interface PrimaryButtonProps {
  label: string,
  // handleClick: () => void
}

export const PrimaryButton = ({label, /* handleClick */} : PrimaryButtonProps) => {
  return (
    <button 
      type="button"
      className="h-fit py-4 px-3 text-xl font-bold rounded-2xl bg-red-600 text-white hover:cursor-pointer hover:bg-red-600/65 transition-colors duration-300 ease-in-out "
    >{label}</button>
  )
}
