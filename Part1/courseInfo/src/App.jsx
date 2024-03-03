const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

export const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        Part: {name} Number of exercises {exercises}{" "}
      </p>
    </div>
  );
};

export const Content = ({ content }) => {


  return (
    <>
      <Part name={content[0].name} exercises={content[0].exercises} />
      <Part name={content[1].name} exercises={content[1].exercises} />
      <Part name={content[2].name} exercises={content[2].exercises} />
    </>
  );
};

export const Total = ({ total }) => {
  const sum = total[0].exercises + total[1].exercises + total[2].exercises;
  return (
    <div>
      <p>Number of exercises: {sum} </p>
    </div>
  );
};

export default App;
