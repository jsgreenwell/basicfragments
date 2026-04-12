import './game.css';
import {useState} from "react";

export default function Matching() {
    // Third iteration: Make work with state & events

    const BACK = "🎴"
    const [clicker, setClicker] = useState({ctr: 0, idx: 0});

    const [cards, flipCard] = useState([
        {id: 0, flipped: false, value: "😭"},
        {id: 1, flipped: false, value: "🦁"},
        {id: 2, flipped: false, value: "🦆"},
        {id: 3, flipped: false, value: "😭"},
        {id: 4, flipped: false, value: "🦆"},
        {id: 5, flipped: false, value: "🦁"}
    ])

    function Board() {
        // Build board the non-function
        let board = []
        let indices = []

        for (let i = 1; i <= cards.length; i++) {
            if (i % 3 === 0) {
                // slice ends exclusive +1 length not index
                indices.push(i)
            } else if (i % 3 === 1) {
                // slice starts (inclusive) -1 to meet index
                indices.push(i-1)
            }
        }

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
                                <button onClick={() => handleCard(card.id)} className="btn-game">
                                    { card.flipped ? card.value : BACK }
                                </button>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }

    function checkMatch(id) {
        console.log(cards[id].value + " is now, it was " + cards[clicker.idx].value)

        // Check new id vs. old id - or use it to check their values
        // If match - update the card and set to match
        if (cards[clicker.idx].value === cards[id].value) {
            return "match"
        } else {
            return "nomatch"
        }

    }

    function handleCard(id) {
        // Check if this is first click or not
        if (clicker.ctr === 0) {
            // First click so just update the card to flipped and move on
            setClicker({ctr: 1, idx: id});
            updateCard(id, "first")
        } else {
            updateCard(id, checkMatch(id))
            setClicker({ctr: 0, idx: 0});
        }

    }

    const updateCard = (id, type) => {
        // Add another useState to find out if matching here (if not - reflip all cards to back)
        // if it's the first flip - just flips the card; match - flips both cards & sets match; third - flips all cards back (without match)
        if (type === "match"){
            flipCard(cards.map(item => {
                if (item.id === id || item.id === clicker.idx) {
                    // The id matches so change flipped to true (to flip it)
                    return {...item, match: true, flipped: true};
                }
                return item
            }))
        } else if (type === "nomatch") {
            flipCard(cards.map(item => {
                if (!item.match) {
                    // The id matches so change flipped to true (to flip it)
                    return {...item, flipped: false};
                }
                return item
            }))
        } else {
            flipCard(cards.map(item => {
                if (item.id === id && !item.match) {
                    // The id matches so change flipped to true (to flip it)
                    return {...item, flipped: true};
                }
                return item
            }))
        }
    }

    return (
        <>
            <p>Under Construction: Sprint 1 complete: Stage 2 started</p>
            <table>
                <tbody>
                    <Board />
                </tbody>
            </table>
        </>
    )
}