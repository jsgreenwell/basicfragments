import './game.css';
import {useState} from "react";

export default function Matching() {
    // Third iteration: Make work with state & events
    const BACK = "🎴"

    const [cards, setCards] = useState([
        {id: 0, flipped: false, value: "😭", match: false},
        {id: 1, flipped: false, value: "🦁", match: false},
        {id: 2, flipped: false, value: "🦆", match: false},
        {id: 3, flipped: false, value: "😭", match: false},
        {id: 4, flipped: false, value: "🦆", match: false},
        {id: 5, flipped: false, value: "🦁", match: false}
    ])

    function Board() {
        // This will just render the board
        // So this was rendering twice - hate that needs a "prevent Default" - let's use map now
        // Removed the board list - just map is fine - still need start & end indices so mutate local variable
        // to hold all start/end ids (start will always have remainder of 1 (1 past 3) and 0 for end
        let indices = []
        // console.log("Once or Twice?") // uncomment to check how many times this is rendering

        for (let i = 1; i <= cards.length; i++) {
            if (i%3 === 0) {
                // Slice ends with length (index to length) so +1 - hate JS slice
                indices.push(i)
            } else if (i%3 === 1) {
                // Slice starts with index so minus 1
                indices.push(i-1)
            }
        }

        // Now its dynamic (_ means ignore this value)
        return indices.map((_, i) => {
            return <BoardRow start={indices[i]} end={indices[i+1]} />
        })
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

    function updateCard(id) {
        console.log(id) // Just to check
        setCards(cards.map(card => {
            if (card.id === id) {
                // The id matches so change flipped to true (to flip it)
                return {...card, flipped: true};
            }
            return card
        }))
    }

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