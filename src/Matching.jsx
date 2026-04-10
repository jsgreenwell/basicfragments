import './game.css';

const BACK = "🎴"
const cards = [
    {id: 1, flipped: true, value: "😭", match: false},
    {id: 2, flipped: true, value: "🦁", match: false},
    {id: 3, flipped: false, value: "🦆", match: false},
    {id: 4, flipped: false, value: "😭", match: false},
    {id: 5, flipped: true, value: "🦆", match: false},
    {id: 6, flipped: true, value: "🦁", match: false}
]


function updateCard({id}) {
    return id
}

function Board() {
    // This will just render the board
    // Yes, this is the hard way, but it helps to figure out the components

    let board = []
    // to hold all start/end ids (start will always have remainder of 1 (1 past 3) and 0 for end
    let indices = []

    for (let i = 1; i <= cards.length; i++) {
        if (i%3 === 0) {
            // Slice ends with length (index to length) so +1 - hate JS slice
            indices.push(i)
        } else if (i%3 === 1) {
            // Slice starts with index so minus 1
            indices.push(i-1)
        }
    }

    // Now its dynamic
    for (let i = 0; i < indices.length; i+=2) {
        board.push(<BoardRow start={indices[i]} end={indices[i+1]} />)
    }

    return board
}

function BoardRow({start, end}) {
    return (
        <tr>
            {
                cards.slice(start, end).map(card => {
                    return (
                        <td>
                        <button className="btn-game" onClick={() => updateCard(card.id)}>
                            { card.flipped ? card.value : BACK }
                        </button>
                        </td>
                    )})
            }
            </tr>
    )
}

export default function Matching() {
    // Third iteration: Make work with state & events

    return (
        <>
            <p>Under Construction: Starting with board (all "flipped")</p>
            <table>
                <tbody>
                    <Board />
                </tbody>
            </table>
        </>
    )
}