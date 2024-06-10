import { Circle } from 'react-konva';
export default function Contour({ points, setPoints, scale }) {
  return (
    <>
      {points.map((point, index) => (
        <Circle
          key={index}
          x={point[0]}
          y={point[1]}
          radius={7}
          fill={'red'}
          draggable
          onDragMove={(event) => {
            const newPoints = points.map((p, i) =>
              i === index
                ? [parseInt(event.target.x()), parseInt(event.target.y())]
                : p,
            );
            setPoints(newPoints);
          }}
        />
      ))}
    </>
  );
}
