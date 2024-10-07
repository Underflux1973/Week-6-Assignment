import "./Scooby_snack_clicker.css";

export default function Scooby_snack_clicker() {
  return (
    <>
      <div id="scooby_snack_button_container">
        <h1 id="button_container_headline">
          What would you do for a Scooby Snack?
        </h1>
        <button
          id="scooby_snack_clicker"
          src="./public/ScoobySnack_clicker_image.webp"
          nopin="nopin"
          width={400}
          height={400}
        ></button>
        <p>Click here to bribe Scooby!</p>
      </div>
    </>
  );
}
