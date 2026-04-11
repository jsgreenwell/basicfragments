import './game.css';
import {useState} from "react";

export default function Matching() {
    // Third iteration: Make work with state & events
    const BACK = "🎴"
    const [clicker, setClicker] = useState({ctr: 0, idx: 0})

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
                                <button className="btn-game" onClick={() => handleCard(card.id)}>
                                    { card.flipped ? card.value : BACK }
                                </button>
                            </td>
                        )})
                }
            </tr>
        )
    }

    function handleCard(id) {
        if (clicker.ctr === 0) {
            // This is the first click so we just need to update the Card
            setClicker({ctr: 1, idx: id})
            updateCard(id)
        } else {
            checkForMatch(id)
            setClicker({ctr: 0, idx: 0})
        }
    }

    function updateCard(id) {
        console.log(id) // Just to check
        setCards(cards.map(card => {
            if (card.id === id && !card.match) {
                // The id matches so change flipped to true (to flip it)
                // Also check if its already been matched
                return {...card, flipped: true};
            }
            return card
        }))
    }

    function checkForMatch(idx) {
        console.log("new index: " + idx + " vs. old index: " + clicker.idx);
        // If we have a match - then flip both cards & set to matched
        // So this works
        console.log(cards[clicker.idx].value);
        console.log(cards[idx].value)

        // Match - set values & leave alone
            if (cards[clicker.idx].value === cards[idx].value) {
                let indices = [clicker.idx, idx]
                setCards(cards.map(card => {
                    if (indices.includes(card.id)) {
                        return {...card, flipped: true, match: true};
                    } else {
                        return card;
                    }
                }))
            } else {
                // Reset all the cards
                setCards(cards.map(card => {
                    if (!card.match) {
                        return {...card, flipped: false};
                    } else {
                        return card;
                    }
                }))

            }
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