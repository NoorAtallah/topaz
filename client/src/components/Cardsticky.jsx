const CardSticky = React.forwardRef(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [scrollProgress, setScrollProgress] = React.useState(0)
    const cardRef = React.useRef(null)

    React.useEffect(() => {
      const handleScroll = () => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
        setScrollProgress(progress)
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const y = index * incrementY
    const z = index * incrementZ
    
    // Dynamic rotation and scale based on scroll
    const rotateX = (1 - scrollProgress) * 5
    const rotateY = (1 - scrollProgress) * -3
    const scale = 0.95 + (scrollProgress * 0.05)

    return (
      <motion.div
        ref={(el) => {
          cardRef.current = el
          if (typeof ref === 'function') ref(el)
          else if (ref) ref.current = el
        }}
        className={cn(className)}
        style={{
          position: "sticky",
          top: `${y}px`,
          zIndex: z,
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
          transition: 'transform 0.1s ease-out',
          ...style,
        }}
        initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.4, 0.25, 1],
          delay: index * 0.1
        }}
        whileHover={{
          scale: 1.02,
          rotateX: -2,
          rotateY: 2,
          transition: { duration: 0.3 }
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"