const Navigation = (props) => {
  return (
    <div
      className={`w-screen h-40 text-3xl ${
        props.pageColor ? "bg-violet-600" : "bg-emerald-600"
      }  flex justify-center items-center gap-6`}
    >
      <span>&#128310;</span>
      <p className="text-5xl font-bold text-orange-500">GraphQL Training</p>
      <span>&#128310;</span>
    </div>
  );
};

export default Navigation;
