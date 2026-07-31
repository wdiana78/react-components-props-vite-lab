function Header({ name }) {
  return (
    <header
      style={{
        textAlign: "center",
        marginBottom: "45px",
      }}
    >
      <h1>{name}</h1>
    </header>
  );
}

export default Header;