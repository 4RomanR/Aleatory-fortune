const PhrasesContent = ({ phraseQ, handleChangeState }) => {
  const phraseTxt = phraseQ.phrase
   console.log(phraseTxt)

  return (
    <article className="txt-box">
      <h1>FORTUNE COOKIES</h1>
      <button onClick={handleChangeState}><p>Have a try</p></button>
      <div className="bg-txt">
        <p>{phraseTxt}</p>
      </div>
      
    </article>
  )
}
export default PhrasesContent