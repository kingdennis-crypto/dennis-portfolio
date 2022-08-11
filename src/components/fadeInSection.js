import React from 'react';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    let observerRefValue = null; // <-- variable to hold ref value

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    }, {
      threshold: 0.4,
      // rootMargin: "-100px"
    });

    if (domRef.current) {
      observer.observe(domRef.current);
      observerRefValue = domRef.current; // Save ref value
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue) // Use saved value
    }
  }, [domRef]);

  return (
    <div
      className={`fadeInSection ${isVisible ? "isVisible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;