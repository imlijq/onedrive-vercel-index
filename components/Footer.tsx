import config from '../config/site.config'

const createFooterMarkup = () => {
  return {
    __html: config.footer,
  }
}

const Footer = () => {
  return (
      <div
        className=""
        dangerouslySetInnerHTML={createFooterMarkup()}
      ></div>    
  )
}

export default Footer
