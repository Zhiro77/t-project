import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={672}
    height={284}
    viewBox="0 0 672 284"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="3" rx="0" ry="0" width="596" height="314" />
  </ContentLoader>
)

export default MyLoader