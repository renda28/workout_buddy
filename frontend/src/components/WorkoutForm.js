import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [err, setErr] = useState(null);

  const handleTitleChange = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  const handleLoadChange = ({ target }) => {
    const { value } = target;
    setLoad(value);
  };

  const handleRepsChange = ({ target }) => {
    const { value } = target;
    setReps(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setErr(json.error);
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setErr(null);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label for="title">Exercise title:</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />

      <label for="load">Load (in kg):</label>
      <br />
      <input
        type="number"
        id="load"
        name="load"
        value={load}
        onChange={handleLoadChange}
      />
      <br />

      <label for="load">Reps:</label>
      <br />
      <input
        type="number"
        id="reps"
        name="reps"
        value={reps}
        onChange={handleRepsChange}
      />
      <br />

      <button>Add workout</button>
      {err && <div className="error">{err}</div>}
    </form>
  );
};

export default WorkoutForm;
