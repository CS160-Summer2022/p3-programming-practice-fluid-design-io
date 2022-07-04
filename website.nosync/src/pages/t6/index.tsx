import Layout from "@/components/Layout";

function TaskSix() {
  const task6List = ["a", "b", "c", "d", "e", "f"];
  return (
    <Layout title="View 1">
      <main>
        <div className="max-w-lg mx-auto my-12">
          <ul className="list-group">
            {task6List.map((item) => (
              <li className="list-group-item" key={item}>
                <a href={`/t6/${item}`}>Task 6{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
export default TaskSix;
