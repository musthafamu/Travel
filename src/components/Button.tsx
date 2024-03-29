
import Image from 'next/image'

type ButtonProps={
  type:"button"|'submit'
  title:string;
  icon?:string;
  variant:"btn_dark_green";

}

function Button({type,title,variant,icon}:ButtonProps) {
  return (
    <button  className={`flexCenter gap-3 rounded-full border ${variant}`} type={type} >
    {icon && <Image src={icon } alt={title} width={20} height={20} />}
    <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button