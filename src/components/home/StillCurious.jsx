import Button from "../ui/Button";

export default function StillCurious() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Still curious?</p>
        <h2>There is probably something else on the desk.</h2>

        <Button href="/writing">Keep exploring</Button>
      </div>
    </section>
  );
}