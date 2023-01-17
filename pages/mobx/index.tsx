import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStore } from "../../src/store";

const MobX = () => {
  console.log("rend");

  return (
    <div
      style={{
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Arr />
      <AddTodo />
      <Value />
    </div>
  );
};

export default MobX;

const Arr = observer(() => {
  const store = useStore();

  console.log("Arr render");

  if (store.toDos.length === 0) {
    return <div>No data</div>;
  }

  return (
    <>
      <ol>
        Todos
        {store.toDos.map((i, j) => (
          <li key={j}>{i}</li>
        ))}
      </ol>
    </>
  );
});

const AddTodo = () => {
  const ref = useRef<HTMLInputElement>(null!);
  const store = useStore();

  return (
    <>
      <input placeholder="todo" ref={ref} />
      <button
        onClick={(e) => {
          e.preventDefault();
          const todo = ref.current?.value!;
          store.addToDo(todo);
          ref.current.value = "";
        }}
      >
        Add todo
      </button>
    </>
  );
};

const Value = observer(() => {
  const store = useStore();

  console.log("Value render");

  return (
    <>
      <div>{store.value}</div>
      <button
        onClick={() => store.changeValue()}
      >{`${store.value} + 1`}</button>
    </>
  );
});
