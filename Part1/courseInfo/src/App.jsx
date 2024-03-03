const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const sum = exercises1 + exercises2 + exercises3;
  const data = {
    Course_parts: [part1, part2, part3],
    NumExe: [exercises1, exercises2, exercises3],
  };

  return (
    <div>
      <Header course={course} />
      <Content content={data} />
      <Total total={sum} />
    </div>
  );
};

export const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

export const Part = ({ part, partNum, exercise }) => {
  return (
    <div>
      <p>
        Course part {partNum}: {part} | Number of exercises {exercise}{" "}
      </p>
    </div>
  );
};

export const Content = ({ content }) => {
  const { Course_parts, NumExe } = content;

  // Destructured Course_parts ands NumExe arrays from content object
  // Mapped through the Course_parts array so that their will be 1 part comp per item in the array.
  // Passed course part and exercise to part as props
  // Since there are the same amount of values in both arrays I was able to pass NumExe[index]  without mapping over the exercise array
  return (
    <>
      {Course_parts.map((part, index) => {
        return (
          <Part
            key={index}
            part={part}
            exercise={NumExe[index]}
            partNum={index}
          />
        );
      })}
    </>
  );
};

export const Total = ({ total }) => {
  return (
    <div>
      <p>Number of exercise: {total} </p>
    </div>
  );
};

export default App;
