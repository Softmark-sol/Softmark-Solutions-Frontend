
import '../css/PortfolioCard.css'


function PortfolioCard({path}) {
  return (

    <div className='portfolioCard'>
        <img src={path} style={{width:'100%'}} alt='portfolio-card-img'/>
    </div>
  );
}

export default PortfolioCard;