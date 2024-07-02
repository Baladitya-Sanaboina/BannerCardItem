// Write your code here.
import './index.css'

const BannerComp = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>show more</button>
      </div>
    </li>
  )
}
export default BannerComp
