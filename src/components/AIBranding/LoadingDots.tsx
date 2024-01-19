// import { useSpring, animated } from 'react-spring';

const LoadingDots = () => {};
export default LoadingDots;
// const LoadingDots = ({ timing = 0, size, color }) => {
//   const styles = useSpring({
//     loop: { reverse: true },
//     from: { opacity: 1 },
//     to: { opacity: 0 },
//     delay: timing,
//     config: { duration: 500 }
//   });

//   return (
//     <animated.div style={{
//       ...styles,
//       width: size,
//       height: size,
//       borderRadius: 50,
//       backgroundColor: color || '#000',
//     }} />
//   );
// };

// const LoadingDots = ({ size = 5, color }) => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'translateY(-3px)' }}>
//       <AnimationDot size={size} color={color} />
//       <div style={{ marginHorizontal: 3 }}>
//         <AnimationDot timing={300} size={size} color={color} />
//       </div>
//       <AnimationDot timing={500} size={size} color={color} />
//     </div>
//   );
// };

// export default LoadingDots;
