import './game.css';
import {useState} from "react";

const BACK = "🎴"

export default function Matching() {
    // Third iteration: Make work with state & events

    const [cards, flipCard] = useState([
        {id: 1, flipped: false, value: "😭"},
        {id: 2, flipped: false, value: "🦁"},
        {id: 3, flipped: false, value: "🦆"},
        {id: 4, flipped: false, value: "😭"},
        {id: 5, flipped: false, value: "🦆"},
        {id: 6, flipped: false, value: "🦁"}
    ])

    const updateCard = (id) => {
        // Add another useState to find out if matching here (if not - reflip all cards to back)
        flipCard(cards.map(item => {
            if (item.id === id) {
                // The id matches so change flipped to true (to flip it)
                return {...item, flipped: true};
            }
            return item
        }))
    }

    return (
        <>
            <p>Under Construction: Starting with board (all "flipped")</p>
            <table>
                <tbody>
                <tr>
                    <td>
                        <button onClick={() => updateCard(1)} className="btn-game">
                            { cards[0].flipped ? cards[0].value : BACK }
                        </button>
                    </td>
                    <td>
                        <button onClick={() => updateCard(2)} className="btn-game">
                            { cards[1].flipped ? cards[1].value : BACK }
                        </button>
                    </td>
                    <td>
                        <button onClick={() => updateCard(3)} className="btn-game">
                            { cards[2].flipped ? cards[2].value : BACK }
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => updateCard(4)} className="btn-game">
                            { cards[3].flipped ? cards[3].value : BACK }
                        </button>
                    </td>
                    <td>
                        <button onClick={() => updateCard(5)} className="btn-game">
                            { cards[4].flipped ? cards[4].value : BACK }
                        </button>
                    </td>
                    <td>
                        <button onClick={() => updateCard(6)} className="btn-game">
                            { cards[5].flipped ? cards[5].value : BACK }
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}