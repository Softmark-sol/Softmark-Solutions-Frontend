
import '../css/PortfolioCard.css'


function PortfolioCard({path}) {
  return (

    <div className='portfolioCard'>
        <img src={path} style={{width:'100%'}}/>
    </div>
  );
}

export default PortfolioCard;