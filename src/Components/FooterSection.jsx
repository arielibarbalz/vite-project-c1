const FooterSection = ({item}) => {
  return (
    <div>
        {item.map((ele, index) => index === 0 ? 
            <h3 key={index}>{ele}</h3> : 
            <h5 key={index}>{ele}</h5>)}
    </div>
  )
}

export default FooterSection