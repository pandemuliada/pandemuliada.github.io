const Container = ({ children, ...props }) => (
  <div className={`container mx-auto px-6 sm:px-12 ${props.className}`}>
    {children}
  </div>
)

export default Container
