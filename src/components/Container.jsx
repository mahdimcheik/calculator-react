import Number from "./Number"
export default function Container(){
    const numbers = ['%','CE', 'C', 'X', '1/x', 'x2', 'sqrt', '/','7','8', '9', '*', '4', '5', '6', '-', '1','2', '3', '+', '+/-', '0', ',', '='];
    return (
        <div className="container">
            <div className="screen"></div>
            <div className="ms">
                <a>MC</a>
                <a>MR</a>
                <a>M+</a>
                <a>M-</a>
                <a>MS</a>
                <a>M^</a>
            </div>
            <div className="numpad">
                {numbers.map((number, index) => <Number key={index} number={number}/>)}
            </div>
        </div>
    )
}