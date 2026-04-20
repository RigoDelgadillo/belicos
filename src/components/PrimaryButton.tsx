
interface PrimaryButtonProps {
  label: string,
  // handleClick: () => void
}

export const PrimaryButton = ({label, /* handleClick */} : PrimaryButtonProps) => {
  return (
    <button 
      type="button"
      className="h-fit p-4 text-lg font-semibold rounded-2xl bg-red-600 text-white hover:cursor-pointer hover:bg-red-700 transition-colors duration-300 ease-in-out "
    >{label}</button>
  )
}
