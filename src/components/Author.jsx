const Author = ({ authorProps }) => {
  const authorTxt = authorProps.author
   console.log(authorProps)
  return (
    <div>
      <p>{authorTxt}</p>
    </div>
  )
}
export default Author