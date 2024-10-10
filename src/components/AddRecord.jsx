import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecord } from "../features/Records/recordSlices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

export const AddRecord = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const today = new Date().toLocaleDateString("en-ca");


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise.trim() && weight.trim() && date.trim()) {
      dispatch(addRecord({ exercise: exercise, weight: weight, date: date }));

      // Show success toast
      toast.success("Record added successfully!");

      // Reset the form
      setExercise("");
      setWeight("");
      setDate("");
    } else {
      // Show error toast
      toast.error("Please fill all fields!");
    }
  };
  return (
    <>
    <h1 className="text-center text-blue-700 font-bold text-2xl uppercase md:text-4xl mt-4 mb-8 tracking-wider mx-10">Crush Your <span className="text-red-600 font-extrabold">PowerLifting</span> Goals</h1>
      <div className="flex justify-center ">
        <div className="bg-gray-200 text-gray-800 py-6 px-8 border border-gray-400 w-full md:w-[28rem] mx-5 rounded-md shadow-lg shadow-gray-600/90">
          <h1 className="text-lg md:text-2xl font-bold text-amber-600 text-center mb-3 uppercase">
            Elevate Your Lifting Game
          </h1>
          <h5 className="font-extrabold text-emerald-700 text-base md:text-lg uppercase text-center mb-6 md:mb-8">
            Add New Record
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="flex items-start justify-start gap-1 md:gap-2 my-5 flex-col">
              <label
                htmlFor="exercise"
                className="font-semibold text-base md:text-xl"
              >
                Exercise
              </label>
              <select
                className="w-full text-sm md:text-base bg-gray-800 rounded-md border-gray-700 text-white p-3 font-semibold tracking-wider uppercase"
                id="exercise"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
              >
                <option value="">Select a Exercise</option>
                <option value="BenchPress">Bench Press</option>
                <option value="DeadLift">Dead Lift</option>
                <option value="Squats">Squats</option>
              </select>
            </div>
            <div className="flex items-start justify-start gap-1 md:gap-2 my-5 flex-col">
              <label
                htmlFor="weight"
                className="font-semibold text-base md:text-xl"
              >
                <div className="flex items-center justify-center gap-1">
                  Weight <span className="text-xs md:text-sm">(kgs)</span>
                </div>
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in Kgs"
                className="w-full text-sm md:text-base bg-gray-800 rounded-md border-gray-700 text-white p-3 font-semibold "
              />
            </div>
            <div className="flex items-start justify-start gap-1 md:gap-2 my-5 flex-col">
              <label
                htmlFor="exercise"
                className="font-semibold text-base md:text-xl"
              >
                Date
              </label>
              <input
                className="w-full text-sm md:text-base  bg-gray-800 rounded-md border-gray-700 text-white p-3 font-semibold "
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                max={today}
              />
            </div>
            <button
              type="submit"
              className="my-2 w-full bg-black text-gray-200 py-2 md:py-3 rounded-md uppercase font-bold border border-black hover:bg-white hover:text-gray-900 duration-300"
            >
              Add Record
            </button>
          </form>
          <ToastContainer position="top-right" />
        </div>
      </div>
    </>
  );
};
