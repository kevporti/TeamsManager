type Props = {
  text: string,
  style: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({text, style}) => {
  if (style == 'primary')
    return (
      <button className='bg-chrome-yellow p-2 rounded-md hover:bg-[#cc8601]'>{text}</button>
    )
  return (
    <button className='p-2 border-gray-300 rounded-md border text-gray-300 hover:bg-gray-300 hover:text-inherite'>{text}</button>
  )
}

export default Button
