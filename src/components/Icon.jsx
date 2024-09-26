import SvgSprite from '../assets/sprite.svg'

const Icon = ({ className, icon }) => (
  <svg className={`icon icon-${icon} ${className || ''}`}>
    <use xlinkHref={`${SvgSprite}#icon-${icon}`}></use>
  </svg>
)

export default Icon
