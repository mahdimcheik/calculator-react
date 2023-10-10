export default function Container(){
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
                <a className="number">%</a><a className="number">CE</a><a className="number">C</a><a className="number">X</a>
                <a className="number">1/x</a><a className="number">x2</a><a className="number">sqrt</a><a className="number">/</a>
                <a className="number">7</a><a className="number">7</a><a className="number">9</a><a className="number">*</a>
                <a className="number">4</a><a className="number">5</a><a className="number">6</a><a className="number">-</a>
                <a className="number">1</a><a className="number">2</a><a className="number">3</a><a className="number">+</a>
                <a className="number">+/-</a><a className="number">0</a><a className="number">,</a><a className="number">=</a>
            </div>
        </div>
    )
}