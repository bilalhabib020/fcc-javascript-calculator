
export default function Display({ state }) {
    return (
        <div id="display-div">
        <span id="formula" className="text-light">{state.formula.replace("*","×").replace("/","÷")}</span>
        <span id="display" className="bg-dark text-light">
            {state.output}
        </span>
        </div>
        )
}